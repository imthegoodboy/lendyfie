import React from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const FAQPage = () => {
  const faqs = [
    {
      question: "What is NFT-collateralized lending?",
      answer: "NFT-collateralized lending allows you to use your NFTs as collateral to borrow funds. Your NFT is locked in a smart contract, and if you repay the loan with interest on time, you get it back. If you don't repay, the lender receives the NFT."
    },
    {
      question: "What types of NFTs can I use as collateral?",
      answer: "Any ERC721 NFT token can be used as collateral on Lendyfie. This includes popular NFT collections like art, gaming items, virtual real estate, and more."
    },
    {
      question: "How is the loan amount determined?",
      answer: "As a borrower, you set the loan amount you want. Lenders review your NFT's value and decide whether to fund your loan request based on the collateral and terms you offer."
    },
    {
      question: "What happens if I don't repay my loan on time?",
      answer: "If you fail to repay your loan with interest before the deadline, the NFT collateral is automatically transferred to the lender. This is enforced by the smart contract."
    },
    {
      question: "How do I earn as a lender?",
      answer: "Browse available loan requests, choose ones with NFT collateral you're comfortable with, and fund the loan. You earn the interest rate specified when the borrower repays. If they default, you receive the NFT."
    },
    {
      question: "Is Lendyfie secure?",
      answer: "Yes! Lendyfie uses audited smart contracts on the Polygon blockchain. All transactions are transparent, trustless, and executed automatically without intermediaries."
    },
    {
      question: "What are the fees?",
      answer: "Lendyfie charges minimal platform fees. You'll also pay gas fees on the Polygon network, which are significantly lower than Ethereum mainnet."
    },
    {
      question: "How do I get started?",
      answer: "Connect your Web3 wallet (like MetaMask) to Lendyfie, make sure you're on Polygon Mumbai Testnet, and you're ready to create loan requests or start lending!"
    }
  ];

  return (
    <Container maxWidth="md" style={{ marginTop: '40px', marginBottom: '40px' }}>
      <Box textAlign="center" mb={5}>
        <Typography variant="h2" style={{ fontWeight: 700, color: '#ff6b35', marginBottom: '16px' }}>
          Frequently Asked Questions 💡
        </Typography>
        <Typography variant="h5" style={{ color: '#666' }}>
          Everything you need to know about Lendyfie
        </Typography>
      </Box>

      {faqs.map((faq, index) => (
        <Accordion 
          key={index}
          style={{ 
            marginBottom: '12px', 
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(255, 107, 53, 0.1)',
            '&:before': { display: 'none' }
          }}
        >
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon style={{ color: '#ff6b35' }} />}
            style={{ padding: '16px 24px' }}
          >
            <Typography variant="h6" style={{ fontWeight: 600, color: '#333' }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ padding: '0 24px 24px 24px' }}>
            <Typography style={{ color: '#666', fontSize: '16px', lineHeight: 1.7 }}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      <Box mt={5} p={4} style={{ background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)', borderRadius: '16px', textAlign: 'center' }}>
        <Typography variant="h5" style={{ fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
          Still have questions?
        </Typography>
        <Typography variant="body1" style={{ color: '#fff', fontSize: '16px' }}>
          Click the chat button in the bottom right to talk to our AI assistant! 💬
        </Typography>
      </Box>
    </Container>
  );
};

export default FAQPage;
