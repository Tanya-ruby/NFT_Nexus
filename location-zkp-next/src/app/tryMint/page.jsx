'use client'

import React, { useState } from "react";
import { Wallet, useWallet } from "@aptos-labs/wallet-adapter-react";
import { Network, Provider } from "aptos";

const NFTMinter = () => {
  const [receiverAddress, setReceiverAddress] = useState("");
  const [mintStatus, setMintStatus] = useState("");
//   const { account, signAndSubmitTransaction } = useWallet();

//   const provider = new Provider(Network.TESTNET);

  const mintNFT = async () => {
    // if (!account) {
    //   setMintStatus("Please connect wallet first");
    //   return;
    // }

    try {
        console.log(receiverAddress)
      const payload = {
        type: "entry_function_payload",
        function:
          "0x737db3b87644346f67404a4f3f9c087b028eda3837f0c6aceba6ee55a20a2daf::create_nft::mint_nft_to_address",
        type_arguments: [],
        arguments: [receiverAddress],
      };

      const response = await signAndSubmitTransaction(payload);
    //   await provider.waitForTransaction(response.hash);

      setMintStatus("NFT minted successfully!");
      console.log(mintStatus)
    } catch (error) {
      setMintStatus(`Minting failed: ${error.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Mint NFT</h2>
      <input
        type="text"
        value={receiverAddress}
        onChange={(e) => setReceiverAddress(e.target.value)}
        placeholder="Receiver Address"
        className="w-full p-2 border text-black rounded mb-4"
      />
      <button
        onClick={mintNFT}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Mint NFT
      </button>
      {mintStatus && (
        <div className="mt-4 text-center text-sm">{mintStatus}</div>
      )}
    </div>
  );
};

export default NFTMinter;
