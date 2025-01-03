# PlanetPatrons: Crowdfunded Environmental Project

![PlanetPatrons Banner](https://github.com/user-attachments/assets/a6a37614-81dd-4c1d-9911-5a692577f666)


A platform designed to support crowdfunding for environmental initiatives such as tree planting, cleanups, and renewable energy projects. This platform ensures transparency and accountability by utilizing smart contracts for milestone-based fund releases and community-driven governance.

## Problem Statement

Environmental projects face challenges such as:
- **Lack of Transparency**: Donors lack visibility into how funds are used.
- **Limited Accountability**: Funds may not be used as intended without proper oversight.
- **Difficulty Securing Funds**: Trust issues and lack of verified impact can deter contributors.
- **Engagement Gap**: Donors are often disconnected from the project's progress.
- **Inefficiencies in Fund Distribution**: Funds are often released in a lump sum without milestones.

## Solution Overview

The platform addresses these challenges by offering:
- **Milestone-Based Fund Release**: Smart contracts ensure funds are released only when predefined milestones are met, improving transparency and accountability.
- **Transparent Verification**: Integrating geotagged images, satellite imagery, IoT devices, and third-party validators to confirm progress.
- **Decentralized Governance**: Community involvement through a DAO model for voting on project proposals, approving milestones, and governance decisions.
- **Global Accessibility**: Donations in cryptocurrency or stablecoins, enabling participation from anywhere in the world with low fees.
  
## Key Features
- **Crowdfunding Platform**: Projects are created with clear goals, required funding, and milestones.
- **Smart Contract Integration**: Funds are released based on milestone verification.
- **Transparency Dashboard**: Real-time updates and visibility into project progress.
- **Incentivized Community**: Token rewards for participation in funding, voting, and verification.
- **Global Donations**: Accepts cryptocurrency and stablecoin donations for global participation.

## Tech Stack
- **Frontend**: Next.js, React, TypeScript, Tailwind CSS, Shadcn/ui
- **Backend**: Node.js (Express), Prisma, Supabase, Aptos TypeScript SDK
- **Blockchain**: Aptos for smart contracts and decentralized transactions
- **File Storage**: IPFS for decentralized file storage
- **Authentication**: Lucia for session management and Aptos Wallet Adapter for wallet integration
- **Database**: Supabase/PostgreSQL for project and user data management
- **Real-Time**: Supabase real-time data syncing for project updates

## Screenshots
![image](https://github.com/user-attachments/assets/824de0f8-cd83-4c7d-9a33-333fb126af22)


## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/crowdfunded-environmental-projects.git
   ```

2. **Install dependencies**:
   ```bash
   cd planetpatrons
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file and add your credentials and API keys.

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Visit the platform** at `http://localhost:3000`

## Contributing

Feel free to fork this repository and submit pull requests. Please ensure your code adheres to the project's style guide and includes appropriate tests for any new functionality.

## License

This project is licensed under the MIT License.

## Acknowledgments
- Aptos for providing blockchain infrastructure
- IPFS for decentralized file storage
- Tailwind CSS for rapid UI development
