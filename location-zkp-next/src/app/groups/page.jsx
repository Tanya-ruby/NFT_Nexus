"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import GroupCard from "@/components/GroupCard";
import StarsBg from "@/assets/stars.png";
import LogoImg from "@/assets/nexusLogo.png";
import { motion } from "framer-motion";

const groupsByCategory = [
{
  title: "Hackathon Groups",
  groups: [
    {
      id: 1,
      name: "Hackathon",
      description: "Share your location anonymously to verify participation in the hackathon and mint an exclusive POAP!",
      logo: LogoImg,
    },
    {
      id: 2,
      name: "Hackathon",
      description: "Verify your location to confirm your presence at the hackathon and mint your unique POAP.",
      logo: LogoImg,
    },
    {
      id: 3,
      name: "Hackathon",
      description: "Prove your attendance at the hackathon by anonymously sharing your location and minting a POAP.",
      logo: LogoImg,
    },
  ],
},
];

export default function GroupsPage() {
const router = useRouter();
const [selectedFile, setSelectedFile] = useState(null);
const [ipfsHash, setIpfsHash] = useState('');
const [loading, setLoading] = useState(false);
const [fetchedImage, setFetchedImage] = useState('');

const handleJoinGroup = (groupId, groupName) => {
  router.push(`/verify?groupId=${groupId}&groupName=${groupName}`);
};

const uploadToIPFS = async () => {
  if (!selectedFile) return;
  setLoading(true);

  try {
    const formData = new FormData();
    formData.append('file', selectedFile);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    setIpfsHash(data.ipfsHash);
  } catch (error) {
    console.error('Upload error:', error);
  } finally {
    setLoading(false);
  }
};

const fetchFromIPFS = async () => {
 if (!ipfsHash) return;
 
 try {
   const imageUrl = `http://plum-definite-skink-261.mypinata.cloud/ipfs/${ipfsHash}`;
   setFetchedImage(imageUrl);
 } catch (error) {
   console.error('Fetch error:', error);
 }
};

return (
  <motion.div
    className="min-h-screen relative overflow-hidden"
    style={{
      backgroundImage: `url(${StarsBg.src})`,
      backgroundSize: "cover",
    }}
    animate={{
      backgroundPositionX: StarsBg.width,
    }}
    transition={{
      repeat: Infinity,
      ease: "linear",
      duration: 120,
    }}
  >
    <div className="absolute inset-0 bg-[radial-gradient(90%_300%_at_50%_50%,rgba(59,130,246,0.2)_0%,transparent_50%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.15)_0%,transparent_60%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_100%,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
    
    <div className="relative z-10 max-w-4xl mx-auto p-6 pt-20">
      <h1 className="text-4xl md:text-6xl font-caudex text-center text-blue-300 mb-8">
        Available Groups
      </h1>

      <div className="mb-8 flex flex-col items-center gap-4">
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          className="text-blue-300"
        />
        <div className="flex gap-4">
          <button
            onClick={uploadToIPFS}
            disabled={loading || !selectedFile}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            {loading ? 'Uploading...' : 'Upload to IPFS'}
          </button>
          <button
            onClick={fetchFromIPFS}
            disabled={!ipfsHash}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Fetch from IPFS
          </button>
        </div>
        {ipfsHash && (
          <p className="text-blue-300">
            IPFS Hash: {ipfsHash}
          </p>
        )}
        {fetchedImage && (
          <div className="mt-4 p-4 border-2 border-blue-500 rounded-lg">
            <img 
              src={fetchedImage} 
              alt="Fetched IPFS content" 
              className="max-w-full h-auto"
            />
          </div>
        )}
      </div>

      {groupsByCategory.map((category, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-3xl font-caudex font-bold text-blue-400 mb-6">
            {category.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {category.groups.map((group) => (
              <GroupCard
                key={group.id}
                group={group}
                logo={group.logo}
                onJoin={() => handleJoinGroup(group.id, group.name)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);
}