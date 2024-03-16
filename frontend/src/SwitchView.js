import React, { useState } from 'react';
import InputButton from './InputButton.js';
import View from './View.js';
import './Button.css';

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
        {showInputButton ? <InputButton /> : <View />}
    </div>
  );
};

export default SwitchView;
