import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@material-ui/core';

const AboutPage = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '40px', marginBottom: '40px' }}>
      <Box textAlign="center" mb={5}>
        <Typography variant="h2" style={{ fontWeight: 700, color: '#ff6b35', marginBottom: '16px' }}>
          About Lendyfie 🔐
        </Typography>
        <Typography variant="h5" style={{ color: '#666', maxWidth: '800px', margin: '0 auto' }}>
          The Modern DeFi Platform for NFT-Collateralized Loans
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card style={{ height: '100%', borderRadius: '16px', boxShadow: '0 4px 12px rgba(255, 107, 53, 0.15)' }}>
            <CardContent>
              <Typography variant="h4" style={{ marginBottom: '16px' }}>💰</Typography>
              <Typography variant="h5" style={{ fontWeight: 600, color: '#ff6b35', marginBottom: '12px' }}>
                Unlock Liquidity
              </Typography>
              <Typography variant="body1" style={{ color: '#666', lineHeight: 1.7 }}>
                Turn your NFTs into instant liquidity without selling them. Use your valuable NFTs as collateral to borrow funds when you need them.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card style={{ height: '100%', borderRadius: '16px', boxShadow: '0 4px 12px rgba(255, 107, 53, 0.15)' }}>
            <CardContent>
              <Typography variant="h4" style={{ marginBottom: '16px' }}>📈</Typography>
              <Typography variant="h5" style={{ fontWeight: 600, color: '#ff6b35', marginBottom: '12px' }}>
                Earn Interest
              </Typography>
              <Typography variant="body1" style={{ color: '#666', lineHeight: 1.7 }}>
                Lend your funds to NFT holders and earn attractive interest rates. Your principal is secured by valuable NFT collateral.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card style={{ height: '100%', borderRadius: '16px', boxShadow: '0 4px 12px rgba(255, 107, 53, 0.15)' }}>
            <CardContent>
              <Typography variant="h4" style={{ marginBottom: '16px' }}>⛓️</Typography>
              <Typography variant="h5" style={{ fontWeight: 600, color: '#ff6b35', marginBottom: '12px' }}>
                Trustless & Secure
              </Typography>
              <Typography variant="body1" style={{ color: '#666', lineHeight: 1.7 }}>
                Powered by smart contracts on Polygon blockchain. No intermediaries, low fees, and complete transparency.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box mt={6} p={4} style={{ background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)', borderRadius: '16px' }}>
        <Typography variant="h4" style={{ fontWeight: 700, color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
          Our Mission
        </Typography>
        <Typography variant="body1" style={{ color: '#fff', fontSize: '18px', lineHeight: 1.8, textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          Lendyfie is revolutionizing the NFT ecosystem by solving the liquidity problem. We provide the DeFi infrastructure 
          for NFTs to grow and thrive, enabling holders to unlock value without selling and investors to earn passive income 
          with secure collateral backing.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutPage;
