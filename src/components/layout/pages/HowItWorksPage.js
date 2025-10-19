import React from 'react';
import { Box, Container, Typography, Stepper, Step, StepLabel, StepContent, Button, Paper } from '@material-ui/core';

const HowItWorksPage = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '40px', marginBottom: '40px' }}>
      <Box textAlign="center" mb={5}>
        <Typography variant="h2" style={{ fontWeight: 700, color: '#ff6b35', marginBottom: '16px' }}>
          How It Works 🚀
        </Typography>
        <Typography variant="h5" style={{ color: '#666' }}>
          Simple steps to borrow or lend with NFT collateral
        </Typography>
      </Box>

      <Box mb={6}>
        <Typography variant="h4" style={{ fontWeight: 600, color: '#ff6b35', marginBottom: '24px' }}>
          💰 For Borrowers
        </Typography>
        <Stepper orientation="vertical" style={{ background: 'transparent' }}>
          <Step active>
            <StepLabel>
              <Typography variant="h6" style={{ fontWeight: 600 }}>Connect Your Wallet</Typography>
            </StepLabel>
            <StepContent>
              <Typography>Connect your MetaMask or compatible Web3 wallet to Lendyfie on Polygon Mumbai Testnet.</Typography>
            </StepContent>
          </Step>
          <Step active>
            <StepLabel>
              <Typography variant="h6" style={{ fontWeight: 600 }}>Create Loan Request</Typography>
            </StepLabel>
            <StepContent>
              <Typography>Select your NFT as collateral, specify the loan amount, interest rate, and loan duration you need.</Typography>
            </StepContent>
          </Step>
          <Step active>
            <StepLabel>
              <Typography variant="h6" style={{ fontWeight: 600 }}>Get Funded</Typography>
            </StepLabel>
            <StepContent>
              <Typography>A lender reviews your request and funds your loan. You receive the funds instantly!</Typography>
            </StepContent>
          </Step>
          <Step active>
            <StepLabel>
              <Typography variant="h6" style={{ fontWeight: 600 }}>Repay & Retrieve</Typography>
            </StepLabel>
            <StepContent>
              <Typography>Repay the loan with interest before the deadline to get your NFT back. Simple and secure!</Typography>
            </StepContent>
          </Step>
        </Stepper>
      </Box>

      <Box mb={6}>
        <Typography variant="h4" style={{ fontWeight: 600, color: '#ff6b35', marginBottom: '24px' }}>
          📈 For Lenders
        </Typography>
        <Stepper orientation="vertical" style={{ background: 'transparent' }}>
          <Step active>
            <StepLabel>
              <Typography variant="h6" style={{ fontWeight: 600 }}>Browse Loan Requests</Typography>
            </StepLabel>
            <StepContent>
              <Typography>View all available loan requests and review the NFT collateral, loan terms, and interest rates.</Typography>
            </StepContent>
          </Step>
          <Step active>
            <StepLabel>
              <Typography variant="h6" style={{ fontWeight: 600 }}>Fund a Loan</Typography>
            </StepLabel>
            <StepContent>
              <Typography>Choose a loan request that meets your criteria and fund it. The NFT is held as collateral.</Typography>
            </StepContent>
          </Step>
          <Step active>
            <StepLabel>
              <Typography variant="h6" style={{ fontWeight: 600 }}>Earn Interest</Typography>
            </StepLabel>
            <StepContent>
              <Typography>When the borrower repays, you receive your principal plus interest. If they default, you get the NFT!</Typography>
            </StepContent>
          </Step>
        </Stepper>
      </Box>

      <Paper elevation={3} style={{ padding: '32px', background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)', borderRadius: '16px' }}>
        <Typography variant="h5" style={{ fontWeight: 700, color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
          Why Polygon? ⛓️
        </Typography>
        <Typography variant="body1" style={{ color: '#fff', fontSize: '16px', lineHeight: 1.7, textAlign: 'center' }}>
          Lendyfie uses Polygon for lightning-fast transactions with minimal gas fees, making NFT lending accessible and affordable for everyone.
        </Typography>
      </Paper>
    </Container>
  );
};

export default HowItWorksPage;
