import React from 'react';
import './ConnectButton.css';
function ConnectButton() {
  const connectToMetaMask = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log("Connected to MetaMask!");
      } else {
        console.log('MetaMask extension not detected. Please install MetaMask.');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };
  return (
    <button onClick={connectToMetaMask} className="Connect-button">Connect MetaMask</button>
  );
}
export default ConnectButton;