import React, { Component } from 'react'
import SingleCard from "./SingleCard"
import { connect } from 'react-redux'

class MyAssetsCards extends Component {
  render() {
    let nfts = this.props.NFTAssets;
    let walletConnected = !!this.props.userAddress && !!this.props.userAddress.address;
    // Demo/test NFTs
    const demoNFTs = [
      {
        token_id: '1',
        name: 'Demo NFT #1',
        image_url: 'https://via.placeholder.com/300x300?text=Demo+NFT+1',
        description: 'This is a demo NFT for testing.',
        asset_contract: { address: '0xDEMO', name: 'DemoContract' },
        sell_orders: [],
        permalink: 'https://opensea.io/assets/0xDEMO/1'
      },
      {
        token_id: '2',
        name: 'Demo NFT #2',
        image_url: 'https://via.placeholder.com/300x300?text=Demo+NFT+2',
        description: 'Another demo NFT for UI preview.',
        asset_contract: { address: '0xDEMO', name: 'DemoContract' },
        sell_orders: [],
        permalink: 'https://opensea.io/assets/0xDEMO/2'
      }
    ];
    if (!walletConnected) {
      nfts = demoNFTs;
    }
    const myNFTCards = nfts.length ? (
      nfts.map(nft =>
        <SingleCard nft={nft} type={this.props.type} />
      )
    ) : (
      <h5 className="center" style={{color:'#7b1fa2',marginTop:'2rem'}}>No NFTs found</h5>
    );
    return (
      <div className="row" style={{marginTop:'2rem'}}>
        {!walletConnected && (
          <div className="center" style={{width:'100%'}}>
            <div style={{color:'#ff9800',fontWeight:'bold',marginBottom:'1rem'}}>Demo Mode: Connect your wallet to view your real NFTs.</div>
          </div>
        )}
        {myNFTCards}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userAddress: state.account.accountAddress,
    NFTAssets: state.account.accountAssets
  }
}

export default connect(mapStateToProps)(MyAssetsCards);
