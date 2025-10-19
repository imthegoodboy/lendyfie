import Web3 from 'web3'
import contractInterface from '../../contractsInterfaces/LeaseNFT.json'
import erc721ContractInterface from '../../contractsInterfaces/erc721.json'
import { LEASING_CONTRACT_ADDRESS, mainnet_NETWORK_VERSION } from "../../assets/consts/offersConsts"
import { processingToast, successToast, failedToast } from './toasts.js'

export const getWeb3Account = async () => {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    return window.ethereum.enable().then( accounts => accounts[0].toLowerCase() );
  }
  alert("Install an Ethereum-compatible browser or extension running on mainnet test network to use this app!");
  return 0;
}

export const getAllLeaseOffers = async (address) => {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    const crt = new web3.eth.Contract(contractInterface, LEASING_CONTRACT_ADDRESS, { from: address });
    const leaseOffersNumber = parseInt(await crt.methods.totalLeaseOffers().call())
    return Promise.all(
      [...Array(leaseOffersNumber).keys()].map(
        id => crt.methods.allLeaseOffers(id).call()
      )
    )
  }
  return [];
}

export const approveNFT = async (erc721ContractAddress, userAddress, tokenIdNFT) => {
  const web3 = new Web3(window.ethereum);
  const erc721crt = new web3.eth.Contract(
    erc721ContractInterface,
    erc721ContractAddress,
    {from: userAddress}
  );

  // gas estimate
  erc721crt.methods.approve(LEASING_CONTRACT_ADDRESS, tokenIdNFT).estimateGas((error, gasAmount) => {
    console.log("gas estimate for approve: " + gasAmount);
  });

  erc721crt.methods.approve(LEASING_CONTRACT_ADDRESS, tokenIdNFT).send().on('transactionHash', (hash) => {
    processingToast(hash);
  }).on('receipt', (receipt) => {
    successToast("NFT has been approved!");
  }).on('error', (error) => {
    failedToast();
  });
}

export const leaseNFT = async (userAddress, smartContractAddressOfNFT, token_id,
                        leasePeriod, collateralAmount, leasePrice) => {
  const web3 = new Web3(window.ethereum);
  const crt = new web3.eth.Contract(contractInterface, LEASING_CONTRACT_ADDRESS, {from: userAddress});

  const ethCollateralAmount = web3.utils.toWei(collateralAmount);
  const ethleasePrice = web3.utils.toWei(leasePrice);

  crt.methods.createLeaseOffer(
    smartContractAddressOfNFT,
    token_id,
    ethCollateralAmount,
    ethleasePrice,
    leasePeriod * 86400
  ).send().on('transactionHash', (hash) => {
    processingToast(hash);
  }).on('receipt', (receipt) => {
    successToast("Offer has been created!");
  }).on('error', (error) => {
    failedToast();
  });
}

export const cancelOffer = async (leaseID, userAddress) => {
  const web3 = new Web3(window.ethereum);
  const crt = new web3.eth.Contract(contractInterface, LEASING_CONTRACT_ADDRESS, {from: userAddress});

  crt.methods.cancelLeaseOffer(leaseID).send().on('transactionHash', (hash) => {
    processingToast(hash);
  }).on('receipt', (receipt) => {
    successToast("Offer has been cancelled!");
  }).on('error', (error) => {
    failedToast();
  });
}

export const endleaseOffer = async (leaseID, userAddress) => {
  const web3 = new Web3(window.ethereum);
  const crt = new web3.eth.Contract(contractInterface, LEASING_CONTRACT_ADDRESS, {from: userAddress});

  crt.methods.endLeaseOffer(leaseID).send().on('transactionHash', (hash) => {
    processingToast(hash);
  }).on('receipt', (receipt) => {
    successToast("Offer has ended!");
  }).on('error', (error) => {
    failedToast();
  });
}

export const borrowNFT = async (userAddress, leaseID, collateralAmount, leasePrice) => {
  const web3 = new Web3(window.ethereum);
  const crt = new web3.eth.Contract(contractInterface, LEASING_CONTRACT_ADDRESS, {from: userAddress});

  const colAm = parseFloat(web3.utils.fromWei(collateralAmount, 'ether'));
  const lenPr = parseFloat(web3.utils.fromWei(leasePrice, 'ether'));
  const sumString = (colAm + lenPr).toString();
  const amountToBorrowETH = web3.utils.toWei(sumString);

  crt.methods.acceptLeaseOffer(leaseID).send({value: amountToBorrowETH}).on('transactionHash', (hash) => {
    processingToast(hash);
  }).on('receipt', (receipt) => {
    successToast("Offer is now active!");
  }).on('error', (error) => {
    failedToast();
  });
}
