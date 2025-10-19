import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeCard = () => {
  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="card grad2 lighten-1 center-align rounded-corner">
          <div className="card-content white-text">
            <span className="card-title white-text" style={{ fontSize: '32px', fontWeight: 'bold' }}>Welcome to Lendyfie 🚀</span>
            <br/>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
              The modern DeFi platform for NFT-collateralized loans and lending on Polygon.
              Unlock liquidity from your NFTs or earn interest by lending to NFT holders.
            </p>
            <br/>
          </div>
          <div className="card-action" style={{ borderTop: '1px solid rgba(255,255,255,0.3)' }}>
            <NavLink to='/how-it-works' style={{ color: '#fff', fontWeight: 600, fontSize: '16px', textDecoration: 'underline' }}>📖 How It Works</NavLink>
          </div>
          <div className="card-action" style={{ borderTop: '1px solid rgba(255,255,255,0.3)' }}>
            <NavLink to='/newlease' style={{ color: '#fff', fontWeight: 600, fontSize: '16px', textDecoration: 'underline' }}>🎨 Create Lease Offer</NavLink>
          </div>
          <div className="card-action" style={{ borderTop: '1px solid rgba(255,255,255,0.3)' }}>
            <NavLink to='/newloan' style={{ color: '#fff', fontWeight: 600, fontSize: '16px', textDecoration: 'underline' }}>💰 Create Loan Request</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCard;
