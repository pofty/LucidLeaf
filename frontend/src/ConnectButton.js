import React, { useState } from 'react';
import './ConnectButton.css';

function ConnectButton() {
  const [buttonMsg, setButtonMsg] = useState("Connect MetaMask");

  const connectToMetaMask = async () => {
    try {
      if (window.ethereum) {
        const publicKey = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('MetaMask connection was successful, currently using the wallet address of', publicKey);
        setButtonMsg("Connected: " + publicKey); // Update state here
      } else {
        console.log('MetaMask extension not detected. Please install MetaMask.');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  return (
    <button onClick={connectToMetaMask} className="Connect-button">{buttonMsg}</button> // Use variable here
  );
}

export default ConnectButton;
