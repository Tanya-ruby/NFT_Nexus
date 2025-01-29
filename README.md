# Nexus  

Nexus is a revolutionary platform built on the **Aptos Devnet** that combines geospatial NFTs, blockchain, and AI-powered tools to transform hackathon experiences. 

https://github.com/user-attachments/assets/58b970b5-c408-409a-8dcb-a81bb9ec793b

## 🚀 Features  
### ✅ Completed Features  
- [x] **Smart Contract for geospatial NFT minting**  
  - Developed using **Move**.  
- [x] **Deployed on Testnet**  
  - Fully functional and deployed on the **Aptos Devnet**.  
- [x] **GenAI Integration**  
  - AI-powered bot trained on GitHub repositories to simplify codebase navigation.  
- [x] **Interactive 3D Map**  
  - Enables users to visualize and locate nearby hackathons in real-time.  
- [x] **Zero-Knowledge Proof Verification**  
  - Ensures secure geolocation-based NFT minting.  
- [x] **Hackathon Dashboard**  
  - Track all attended hackathons and access detailed project records.  
- [x] **Hackathon Guide**  
  - Provides tailored recommendations based on user profiles and past hackathons.  
- [x] **IPFS Integration**  
  - Stores all project data securely for permanence and transparency.
  
![WhatsApp Image 2025-01-28 at 19 04 42_740f73e2](https://github.com/user-attachments/assets/76e69268-d784-480c-996b-e013ffe32f7c)
![image](https://github.com/user-attachments/assets/4efc7c15-bf73-4466-807b-4d5958be51af)

## 🛠️ Tech Stack  
- **Blockchain**: Aptos (Move-based smart contracts)  
- **Frontend**: Next.js with TailwindCSS  
- **Backend**: Node.js 
- **Database**: IPFS, MongoDB
- **GenAI Model**: Llama 3.3-70b-versatile via Groq.AI API  

## 🌟 Key Features in Action  
### 1. **Interactive 3D Map**  
Visualize and discover global hackathons in a real-time, interactive environment.  
![image](https://github.com/user-attachments/assets/bf22e4ce-2361-4649-8f58-855b7a6a1345)

### 2. **Mint Geospatial NFTs**  
Securely verify physical attendance at hackathons using **zero-knowledge proofs** and mint unique NFTs for participation.  
![image](https://github.com/user-attachments/assets/4306960f-e719-4faa-bfa1-77886b1dcb79)

### 3. **Personalized Hackathon Guide**  
Receive recommendations for hackathons based on your profile and past participation.  
![image](https://github.com/user-attachments/assets/e84b764b-b93e-4f74-b2da-aca44ecc90af)

### 4. **AI-Powered Bot**  
Analyze your codebase via an AI-trained bot for simplified navigation and collaboration.  
![image](https://github.com/user-attachments/assets/307a7005-5cc2-4021-9f7b-d9eb9a3a0a11)

### 5. **Dashboard**  
Access a consolidated view of all attended hackathons and your associated projects, securely stored on the blockchain.  
![image](https://github.com/user-attachments/assets/66559cb5-5261-4f0e-9a75-cdaaa262bc80)


## 🛠️ Steps to Reproduce  

Follow these steps to set up and run Nexus locally:  

1. Clone the repository:  
   ```bash
   git clone https://github.com/Tanya-ruby/NFT_Nexus.git;
   cd location-zkp-next;
   npm i;
   npm run dev;
   ```  
2. Create a `.env` file inside the `server` folder and update the credentials.  

   **📄 `.env.example`**
   ```env
   PORT=4000
   MONGODB_URL="mongodb+srv://your_username:your_password@your_cluster.mongodb.net/your_db"
   GROQ_API_KEY="your_groq_api_key"
   ```
3. Open a new terminal window and navigate to the backend server directory:  
   ```bash
   cd location-zkp-next;
   cd server;
   npm i;
   nodemon index.js;
   ```  

4. Open your browser and visit `http://localhost:3000` to explore Nexus.  

## 💡 Future Enhancements  
- [ ] Expand support for Mainnet deployment.  
- [ ] Add additional blockchain integrations for cross-chain compatibility.  
- [ ] Enhance the AI bot for multilingual support.  
- [ ] Implement gamification features for hackathon engagement.  


## 👥 Team  
- **Tanya**
- **Sarthak**
- **Raj** 
---

Let’s build the future of hackathons with Nexus!   
