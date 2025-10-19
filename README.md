## CFY.FINANCE
 

 
NFT-Collateralised Loans on Polygon
 

Beta is now Live on Matic Mainnet! Contract Addresses:

- LeaseNFT.sol : 0xbe7Ba64cCAab7a4aaB4D32e4070Bf85D057D2B5c
- LoanNFT.sol : 0x48CddE6c5af7D19BF1A436159b54AD42d753141C
 

*Summary:*

CFY.Finance is a Decentralised Finance (DeFi) protocol for NFT-collateralised loans, and NFT lending. NFTs is a fast growing market that is currently plagued with extreme lack of liquidity. Moreover, unlike ERC20 tokens, holders of ERC721 NFT tokens do not have any way to earn passive income/access liquidity from their holdings. CFY.Finance changes that by allowing peer-to-peer NFT-collateralised loans using any ERC721 NFT. 

Contracts:
[Note: LOAN NFT functionality is fully functional; Lease NFT is still a work in progress]

LoanNFT.sol allows you to:

1. Lock up any ERC721 token as collateral for a loan request
2. Setup loan request parameters, including loan amount, interest amount, and maximum interest periods
3. After loan is funded, you can extend the loan period upto the maximum interest periods
4. Upon repayment of the loan with interest within the time specified, the LoansNFT.sol contract releases your NFT back to you
5. If you fail to repay the loan within the promised time, the NFT collateral is transferred to the creditor

In this way, we allow a peer to peer, trustless liquidity protocol where investors can gain interest on their funds while their principal is secured by valuable NFTs. Meanwhile, NFT hodlers can access liquidity as needed without having to sell/risk their precious NFTs. The scalability of the Polygon chain makes it ideal for running complicated smart contracts like CFY.finance cheaply. *CFY.FINANCE* is also the first trustless NFT application, and first NFT-collateralised loan dApp on Polygon. We hope to provide the DeFi infrastructre for NFTs to grow and thrive on the Polygon Chain.























This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

# Lendyfie — NFT Leasing & Loans Web App

This repository contains the front-end for Lendyfie (previously CFY.Finance), a React-based web app that lets users create and manage NFT-backed lease offers and loan requests. The UI interacts with Ethereum-compatible smart contracts (solidity files in `contracts/`, `c2/`, and `c3/`) and uses Web3 to read and send transactions from the browser.

This README explains what the project is, how the website works, how to run it locally, and step-by-step instructions to deploy the app on Render (static site). All commands below are written for Windows PowerShell.

## What this app does (high level)
- Browse NFT assets and view details
- Create lease offers and loan requests backed by ERC-721 tokens
- Fund and manage loans and leases from the UI
- Connect a browser wallet such as MetaMask, or use Magic SDK in some flows
- Uses Redux for app state, materialize / Material-UI for UI elements, and web3 for blockchain interactions

## Project structure (key files)
- `src/` — React source code
	- `index.js` — App entry point
	- `App.js` — Router and top-level app component
	- `components/` — UI components grouped by feature (leasing, loans, layout)
	- `store/` — Redux actions and reducers
	- `services/web3/` — helpers to connect to contracts and web3 provider
	- `contractsInterfaces/` — contract ABIs used by the frontend
- `public/` — static assets
- `contracts/`, `c2/`, `c3/` — Solidity contracts (for reference or local contract dev)
- `package.json` — npm scripts and dependencies

From `package.json` (important scripts):
- `npm start` — start development server (react-scripts start)
- `npm run build` — make production build (react-scripts build)
- `npm test` — run tests (react-scripts test)

## How the website works (technical flow)
1. When a user opens the site, the React app boots and Redux initializes application state.
2. The UI loads contract ABIs from `src/contractsInterfaces/` and uses web3 to create contract instances.
3. To create or fund a lease/loan, the user connects a wallet (MetaMask) or uses Magic. The app requests the wallet to sign transactions.
4. Transactions (create loan, fund loan, repay, claim collateral) are sent to the network via the provider. The app listens for transaction confirmations and updates the UI state accordingly.
5. For production the app is a static bundle (JS/CSS/HTML) served by any static host. All blockchain interactions happen in the browser, so no server-side code is required.

## Local development (PowerShell)

Prerequisites:
- Node.js & npm installed (Node 10+ recommended for react-scripts v3.x; Node 12+ preferred)
- Optional: MetaMask browser extension or another web3 wallet

Steps:

1. Clone or open the project folder in PowerShell:

```powershell
cd C:\Users\parth\Downloads\leandyfie\leandyfie
```

2. Install dependencies:

```powershell
npm install
```

3. Run the development server:

```powershell
npm start
```

This opens http://localhost:3000 by default. The dev server supports hot-reload.

Notes on wallets and web3:
- In development, open your browser with MetaMask installed and connected to the network you want to test (e.g., Polygon/Matic, Ethereum testnet).
- If the app uses RPC endpoints (Infura/Alchemy), set them via environment variables prefixed with `REACT_APP_`.

## Production build

To build a production-ready static bundle:

```powershell
npm run build
```

The output is written to the `build/` directory. You can serve this folder with any static host.

## Deploying to Render — step by step (Static Site)

Below is a detailed guide to host this app on Render as a static site (recommended for Create React App apps).

Prerequisites:
- A Render account (https://render.com)
- Your project pushed to a Git provider (GitHub/GitLab/Bitbucket)

1) Push your code to a Git provider (example: GitHub)

```powershell
cd C:\Users\parth\Downloads\leandyfie\leandyfie
git init
git add .
git commit -m "Add leadifie frontend"
# replace the URL below with your GitHub repo URL
git remote add origin https://github.com/<your-username>/leadifie.git
git push -u origin main
```

2) Create a new Static Site on Render
- In Render dashboard click New -> Static Site
- Connect Render to your Git provider and select your repo and branch (e.g., `main`)

3) Render settings (important fields)
- Build Command: npm run build
- Publish Directory: build
- Root Directory: leave empty unless your app is in a subfolder
- Environment: set any `REACT_APP_` variables needed (contract addresses, RPC URLs)

4) Start the deployment
- Click Create Static Site. Render will run `npm ci`/`npm install` and then `npm run build`.
- The site will be available at `https://<yoursite>.onrender.com` after successful deploy.

5) Common Render build issues & fixes
- If Render fails because of Node version, pin Node via `package.json`:

```json
"engines": {
	"node": "12.x"
}
```

- If your build needs packages that are currently listed in `devDependencies` and Render isn’t installing them, move required build-time packages to `dependencies`.
- If the build requires native tooling (e.g., specific compilers), you can build locally and deploy the `build/` directory directly using a manual static site deployment on Render or by using a zip upload.

## Alternative: Render Web Service (if you want a running Node process)

If you prefer to host the app as a Web Service (Render runs a server process), use these settings:
- Build Command: npm run build
- Start Command: npx serve -s build

Note: Add `serve` to `dependencies` so Render can install it during build:

```powershell
npm install --save serve
```

Then set the Start Command in Render to:

```
npx serve -s build
```

This makes Render run a small static file server and keep the service alive.

## Environment variables

If your app needs RPC endpoints or contract addresses, add them in Render's Environment section. Use the `REACT_APP_` prefix so Create React App exposes them to the client:

- REACT_APP_INFURA_URL=https://mainnet.infura.io/v3/<key>
- REACT_APP_CONTRACT_ADDRESS=0x1234...

After changing environment variables in Render, redeploy the site.

## Quick Commands (PowerShell) summary

```powershell
# install deps
npm install

# start dev site
npm start

# build production
npm run build

# add serve if using Render Web Service
npm install --save serve

# git push example
git init; git add .; git commit -m "Add leadifie frontend"; git remote add origin https://github.com/<you>/leadifie.git; git push -u origin main
```

## Troubleshooting checklist
- Check browser console for runtime errors (missing env vars, contract addresses)
- Check Render build logs (Render dashboard -> Events & Activity -> View Build Logs)
- Ensure any build-time packages are in `dependencies` (Render installs `dependencies` for static sites)
- If you see ABI mismatches, update JSON files in `src/contractsInterfaces/` to match deployed contracts

## Optional next steps I can do for you
- Add `engines` to `package.json` to pin Node version used on Render
- Add a `render.yaml` for reproducible Render settings
- Move any required build-time dependencies to `dependencies` if you want me to check the build logs

If you want me to make one of those changes now, tell me which and I'll update the repo and run a quick build check.
