# Lendyfie - NFT Lending & Borrowing Platform

## Project Overview
Lendyfie (formerly CFY.Finance) is a modern DeFi platform for NFT-collateralized loans and lending on Polygon blockchain. Users can unlock liquidity from their NFTs or earn interest by lending to NFT holders.

## Recent Changes (October 18, 2025)

### Complete Rebranding & UI Redesign
- **Name Change**: CFY.Finance → Lendyfie
- **Color Scheme**: Changed from purple/green to orange and white gradient theme
  - Primary Orange: `#ff6b35`
  - Secondary Orange: `#ff8c42`
- **Updated Branding**:
  - package.json: Updated to "lendyfie" v1.0.0
  - All page titles and metadata updated
  - Navbar with orange gradient and lock icon
  - Modern card designs with shadows and hover effects

### New Features Added
1. **Enhanced Chat Assistant** (`src/components/Chatbot/`)
   - Smart contextual responses about loans, lending, NFTs, and Polygon
   - Modern orange-themed UI with animations
   - Positioned in bottom-right corner
   - Helpful guidance for users

2. **New Information Pages**:
   - **About Page** (`/about`): Explains Lendyfie's mission and benefits
   - **How It Works** (`/how-it-works`): Step-by-step guides for borrowers and lenders
   - **FAQ Page** (`/faq`): Comprehensive questions and answers

### UI/UX Improvements
- Modern gradient backgrounds
- Smooth hover animations on cards and buttons
- Improved typography with Inter font family
- Responsive design maintained
- Enhanced color contrast for better accessibility

## Tech Stack
- **Frontend**: React 16.14.0, Material-UI 4.11.3, Materialize CSS
- **State Management**: Redux with Redux Thunk
- **Blockchain**: Web3.js, Ethers.js
- **Smart Contracts**: Solidity (0.6.x), OpenZeppelin Contracts
- **Deployment Target**: Polygon Mumbai Testnet

## Smart Contracts
Located in `/contracts/`:
- `LoansNFT.sol`: Main lending/borrowing contract with NFT collateral
- `CFYtoken.sol`: ERC20 reward token contract

## Project Structure
```
/src
  /components
    /Chatbot        - AI assistant with contextual responses
    /layout
      /home         - Landing page
      /navbar       - Navigation with new links
      /pages        - About, How It Works, FAQ
      /leasing      - NFT leasing features (WIP)
      /loans        - NFT loan features (fully functional)
  /store            - Redux state management
  /services         - Web3 and OpenSea integrations
  /assets           - CSS, images, constants
/contracts          - Solidity smart contracts
/public             - Static assets, index.html
```

## Environment Configuration
- **Development Server**: Runs on port 5000
- **Host**: 0.0.0.0 (for Replit compatibility)
- **Node Options**: Uses `--openssl-legacy-provider` for compatibility

## Navigation Structure
- Home (`/`)
- About (`/about`)
- How It Works (`/how-it-works`)
- FAQ (`/faq`)
- Leasing:
  - New Lease Offer (`/newlease`)
  - My Lease Offers (`/myleaseoffers`)
  - All Lease Offers (`/allleaseoffers`)
- Lending:
  - New Loan Request (`/newloan`)
  - My Loan Requests (`/myloans`)
  - All Loan Requests (`/allloans`)

## Development Workflow
1. **Start Development Server**: Workflow "Server" automatically runs `npm start`
2. **Access Website**: Through Replit webview on port 5000
3. **Hot Reloading**: Enabled via React Scripts

## Blockchain Deployment (Next Steps)
To deploy to Polygon Mumbai Testnet, you'll need:

### Required Credentials
1. **RPC Provider** (choose one):
   - Alchemy API key (recommended) - Get from https://www.alchemy.com
   - Infura API key - Get from https://www.infura.io
   
2. **Wallet Private Key**:
   - Export from MetaMask (Account Details → Export Private Key)
   - ⚠️ **NEVER** share this key or commit it to git
   - Use Replit Secrets to store securely

3. **Polygon Mumbai Testnet MATIC**:
   - Get free testnet MATIC from https://faucet.polygon.technology
   - Needed for gas fees when deploying contracts

### How to Get These Credentials

#### 1. Alchemy API Key
1. Go to https://www.alchemy.com
2. Sign up for a free account
3. Create a new app
4. Select "Polygon" as chain and "Mumbai" as network
5. Copy the API key from your dashboard

#### 2. MetaMask Private Key
1. Open MetaMask browser extension
2. Click on your account icon → Account Details
3. Click "Export Private Key"
4. Enter your MetaMask password
5. Copy the private key (keep this secure!)

#### 3. Testnet MATIC
1. Add Polygon Mumbai to MetaMask:
   - Network Name: Mumbai Testnet
   - RPC URL: https://rpc-mumbai.maticvigil.com
   - Chain ID: 80001
   - Currency Symbol: MATIC
2. Visit https://faucet.polygon.technology
3. Paste your wallet address and request testnet MATIC

## User Preferences
- Modern, clean design with orange/white theme
- Focus on usability and clear information
- Professional DeFi platform aesthetic
- Blockchain transparency and trustless operations

## Future Enhancements
- Complete Hardhat deployment setup
- Deploy contracts to Polygon Mumbai
- Connect frontend to deployed contracts
- Add more visual assets and NFT imagery
- Integrate real AI for chatbot (Gemini API)
- Complete NFT leasing functionality
- Add user dashboard with portfolio tracking

## Notes
- Website runs on legacy OpenSSL provider due to old react-scripts version
- Some dependencies have security warnings (consider upgrading in future)
- Leasing features marked as "work in progress" - focus is on lending
- Smart contracts need review and potential fixes before production deployment
