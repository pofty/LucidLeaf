import React, { useState } from 'react';
import InputButton from './InputButton.js';
import Messages from './Messages.js';
import './Switch.css';

const SwitchView = () => {
  const [showInputButton, setShowInputButton] = useState(true);

  const toggleComponent = () => {
    setShowInputButton(!showInputButton);
  };

  return (
    <div className="Container">
    <button className="Button" onClick={toggleComponent}>
    Switch View
	</button>
        {showInputButton ? <InputButton /> : <Messages />}
    </div>
  );
};

export default SwitchView;
