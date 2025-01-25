"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import MapComponent from "@/app/components/map/map";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/app/components/ui/dialog";
import ThemeButton from "../common/theme-button";
import RainbowBorder from "../common/rainbow-border";
import Info from "../common/info";
import { useToast } from "@/app/hooks/use-toast";
import NexusLogo from "@/assets/nexusLogo.png";

export default function PlayableMap() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // Token markers
  const tokens = useMemo(
    () => [
      {
        id: "1",
        latitude: 26.9124,
        longitude: 75.7873,
        symbol: "EME",
        name: "Emerald",
        backgroundColor: "#8A2BE2",
      },
      {
        id: "2",
        latitude: 26.9151,
        longitude: 75.8104,
        symbol: "RUB",
        name: "Ruby",
        backgroundColor: "#8A2BE2",
      },
      {
        id: "3",
        latitude: 26.9121,
        longitude: 75.7777,
        symbol: "SHIB",
        name: "Shiba",
        backgroundColor: "#8A2BE2",
      },
      {
        id: "4",
        latitude: 26.9168,
        longitude: 75.7936,
        symbol: "PEN",
        name: "Pengu",
        backgroundColor: "#8A2BE2",
      },
    ],
    []
  );

  // Current user with position emoji as marker
  const [currentUser, setCurrentUser] = useState({
    id: "current",
    latitude: 0,
    longitude: 0,
    name: "You",
    avatarUrl: "📍", // Use position emoji for current user
  });

  // Modal state
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    selectedItem: typeof tokens[0] | null;
  }>({
    isOpen: false,
    selectedItem: null,
  });

  // Handlers for markers
  const handleTokenClick = useCallback((token) => {
    setModalState({
      isOpen: true,
      selectedItem: token,
    });
  }, []);

  const handleModalClose = useCallback(() => {
    setModalState({
      isOpen: false,
      selectedItem: null,
    });
  }, []);

  // Fetch and update current user location
  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentUser((prev) => ({
          ...prev,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }));
      },
      (error) => console.error("Error retrieving geolocation:", error)
    );
  }, []);

  // Map props
  const mapProps = useMemo(
    () => ({
      tokens,
      currentUser,
      onTokenClick: handleTokenClick,
    }),
    [tokens, currentUser, handleTokenClick]
  );

  const handleClaim = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://a7e5dxwo2iug4evxl3wgbf3ehu.srv.us/claim-quest",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            questId: "12",
            location: {
              longitude: currentUser.longitude,
              latitude: currentUser.latitude,
            },
            userSeed: "user_123",
            secretName: "test2",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Quest Claimed Successfully! 🎉",
          description: (
            <div className="mt-2">
              <p>Transaction Hash:</p>
              <a
                href={data.data.transactionHash}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 underline break-all"
              >
                {data.data.transactionHash.split("/").pop()}
              </a>
            </div>
          ),
          duration: 5000,
        });

        handleModalClose();
      }
    } catch (error) {
      console.error("Error claiming quest:", error);
      toast({
        variant: "destructive",
        title: "Error Claiming Quest",
        description:
          "Something went wrong while claiming your quest. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen">
        <MapComponent {...mapProps} />
      </main>

      <Dialog
        open={modalState.isOpen}
        onOpenChange={(open: boolean) => !open && handleModalClose()}
      >
        <DialogContent className="bg-transparent border-none">
          <DialogTitle className="sr-only">
            {modalState.selectedItem?.name || "Item Details"}
          </DialogTitle>
          <div className="mb-4">
            {modalState.selectedItem && (
              <div className="space-y-4">
                <RainbowBorder>
                  <div className="pb-4">
                    <Info
                      tokenImage={NexusLogo.src} // Display NexusLogo for the token
                      tokenName={modalState.selectedItem.name}
                      tokenType={modalState.selectedItem.symbol}
                      description={[
                        "📧 Connect your wallet.",
                        "🎯 Claim rewards now!",
                      ]}
                      rewardAmount="500"
                      rewardSymbol="$NEX"
                    />
                    <div className="self-stretch flex justify-end mt-4">
                      <ThemeButton
                        btn="large"
                        text="Claim"
                        onClick={handleClaim}
                      />
                    </div>
                  </div>
                </RainbowBorder>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
