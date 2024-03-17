import React, { useState } from 'react';
import InputButton from './InputButton.js';
import Messages from './Messages.js';
import './Switch.css';

const SwitchView = ({ switchText }) => {
  const [showInputButton, setShowInputButton] = useState(true);
  const [switchState, setSwitchState] = useState(false); // Add a state variable for the switch state

  const toggleComponent = () => {
    setShowInputButton(!showInputButton);
    setSwitchState(!switchState); // Toggle the switch state when the switch is clicked
  };

  return (
    <div className="Container">
      <label className="Switch">
        <input type="checkbox" onClick={toggleComponent} />
        <span className="Slider"></span>
      </label>
      <p>{switchState ? "Download and Read" : "Upload Securely Forever"}</p> {/* Display different text based on the switch state */}
      {showInputButton ? <InputButton /> : <Messages />}
    </div>
  );
};

export default SwitchView;