import axios from 'axios';
import { OPENSEA_ASSETS, OPENSEA_SINGLE_ASSET, API_KEY} from "../../assets/consts/assetsConsts"

// Helper: perform login to the Matic marketplace (if needed). Returns parsed JSON or null on error.
export async function getMaticLogin() {
  try {
    const resp = await axios.post(
      'https://nft-marketplace.api.matic.network/api/v1/users/login',
      { address: '0xA66748Aa582a81fACFA9De73469eF217Bf839f4E', signature: '0x0003125589cff31b19a8a2e9eddd427760a11f8b908cd4a694486193a6bfa0651fb3fdfda2e02cd6b136d734fa7288611b1745902698b39a4253e06be6cfa8061b' },
      { headers: { 'Content-Type': 'application/json' } }
    );
    return resp.data;
  } catch (err) {
    // network or API not available — return null and don't throw during module import
    console.warn('getMaticLogin failed:', err.message || err);
    return null;
  }
}

export async function getAssetsOpensea(account) {
  try {
    const baseurl = 'https://api.opensea.io/api/v2/assets/matic?owner=';
    const url = baseurl + encodeURIComponent(account);
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    console.error('getAssetsOpensea error:', error && error.message ? error.message : error);
    return null;
  }
}

export async function getAssetsOpensea2(account) {
  return await getAssetsOpensea(account);
}

export const getAllLeaseAssets = async (leaseOffers) => {
  return Promise.all(
    leaseOffers.map(
      (offer) => getAssetRequest(offer.smartContractAddressOfNFT, offer.tokenIdNFT)
    )
  );
}

export const getAllLoanAssets = async (loanRequests) => {
  return Promise.all(
    loanRequests.map(
      (request) => getAssetRequest(request.smartContractAddressOfNFT, request.tokenIdNFT)
    )
  );
}

export const getAssetRequest = async (contractAddress, tokenIdNFT) => {
  try {
    const url = OPENSEA_SINGLE_ASSET ? `${OPENSEA_SINGLE_ASSET}/${contractAddress}/${tokenIdNFT}` :
      `https://api.opensea.io/api/v1/asset/${contractAddress}/${tokenIdNFT}`;
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    console.error('getAssetRequest error:', error && error.message ? error.message : error);
    return null;
  }
}
