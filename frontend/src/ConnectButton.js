import React, { useState, useEffect } from 'react';
import Identicon from 'identicon.js';
import './Connect.css';

function ConnectButton() {
  const [connectedAddress, setConnectedAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [connectionChecked, setConnectionChecked] = useState(false);

  useEffect(() => {
    const checkIfConnected = async () => {
      try {
        if (window.ethereum) {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            const address = accounts[0];
            setConnectedAddress(address);
            console.log("Connected to MetaMask! Address:", address);
          }
        }
        setLoading(false);
        setConnectionChecked(true);
      } catch (error) {
        console.error('Error checking MetaMask connection:', error);
        setLoading(false);
        setConnectionChecked(true);
      }
    };

    checkIfConnected();
  }, []);

  const connectToMetaMask = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const address = accounts[0];
        setConnectedAddress(address);
        console.log("Connected to MetaMask! Address:", address);
      } else {
        console.log('MetaMask extension not detected. Please install MetaMask.');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  const disconnectFromMetaMask = async () => {
	try {
	  if (window.ethereum) {
		setConnectedAddress(null);
		console.log("Disconnected from MetaMask");
	  } else {
		console.log('MetaMask extension not detected.');
	  }
	} catch (error) {
	  console.error('Error disconnecting from MetaMask:', error);
	}
  };
  
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!connectionChecked) {
    return <div>Checking MetaMask connection...</div>;
  }

  if (connectedAddress) {
    const identiconData = new Identicon(connectedAddress, { size: 30 }).toString();
    return (
      <div className="Connected-account">
        <img src={`data:image/png;base64,${identiconData}`} alt="Identicon" className="Identicon" />
        <div className="Connected-address">
          {connectedAddress}
		<button onClick={disconnectFromMetaMask} className="Sign_out">Sign out</button>
      </div>
    </div>
    );
  } else {
    return (
        <button onClick={connectToMetaMask} className="Connect">Connect MetaMask</button>
    );
  }
}

export default ConnectButton;
