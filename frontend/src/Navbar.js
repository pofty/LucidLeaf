import React from 'react';
import './Navbar.css';
import SwitchView from './SwitchView.js';
import ConnectButton from './ConnectButton.js';

function Navbar() {
  return (
    <div className="Container">
	<SwitchView />
	<ConnectButton />
    </div>
  );
}

export default Navbar;
