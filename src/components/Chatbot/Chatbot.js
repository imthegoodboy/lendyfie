import React, { useState } from 'react';
import './Chatbot.css';

export default function Chatbot(){
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {from: 'bot', text: '👋 Welcome to Lendyfie! I\'m here to help you with NFT-collateralized loans and lending. How can I assist you today?'}
  ]);
  const [input, setInput] = useState('');

  function send(){
    if(!input) return;
    setMessages(m => [...m, {from: 'user', text: input}]);
    const userQuestion = input.toLowerCase();
    setInput('');
    
    setTimeout(()=>{
      let botReply = '';
      if(userQuestion.includes('loan') || userQuestion.includes('borrow')){
        botReply = '💰 To create a loan request, go to "Create Loan Request" and lock your NFT as collateral. Set your loan amount, interest rate, and duration. Once funded, you\'ll receive the loan amount!';
      } else if(userQuestion.includes('lend') || userQuestion.includes('earn')){
        botReply = '📈 Browse available loan requests in "All Loan Requests". Review the NFT collateral and terms. Fund loans to earn interest when borrowers repay!';
      } else if(userQuestion.includes('nft') || userQuestion.includes('collateral')){
        botReply = '🖼️ Any ERC721 NFT can be used as collateral. Your NFT stays locked in our smart contract until you repay the loan. If you don\'t repay on time, it transfers to the lender.';
      } else if(userQuestion.includes('polygon') || userQuestion.includes('testnet')){
        botReply = '⛓️ Lendyfie runs on Polygon blockchain for low fees and fast transactions. Make sure you\'re connected to Polygon Mumbai Testnet in MetaMask!';
      } else {
        botReply = '🤖 I can help you with: Creating loans 💰, Lending to earn 📈, Understanding NFT collateral 🖼️, and Polygon setup ⛓️. What would you like to know?';
      }
      setMessages(m => [...m, {from: 'bot', text: botReply}]);
    }, 600);
  }

  return (
    <div className={"chatbot-wrapper " + (open ? 'open' : '')}>
      <div className="chatbot-toggle" onClick={()=>setOpen(!open)}>{open? '✕' : '💬 Chat'}</div>
      <div className="chatbot-window">
        <div className="chatbot-header">🔐 Lendyfie Assistant</div>
        <div className="chatbot-body">
          {messages.map((m,i)=> (
            <div key={i} className={"chat-message " + m.from}>{m.text}</div>
          ))}
        </div>
        <div className="chatbot-footer">
          <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask a question..." />
          <button onClick={send}>Send</button>
        </div>
      </div>
    </div>
  );
}
