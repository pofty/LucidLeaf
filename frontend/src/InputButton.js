import React, { useState } from 'react';
//import './InputBox.css';
//import './Journal.css';
import './InputBox.css';

function InputBox({ onClose }) {
	const [inputValue, setInputValue] = useState('');

	const handleChange = (event) => {
    	setInputValue(event.target.value);
  	};

	const handleSubmit = (event) => {
    	event.preventDefault();
    	console.log('User input:', inputValue);
    	setInputValue('');
  	};
  	return (
    	<div className="InputBox">
			<form onSubmit={handleSubmit}>
				<label>
					<textarea value={inputValue} onChange={handleChange} />
				</label>
				<button type="submit">Submit</button>
				<button onClick={onClose}>Close</button>
			</form>
		</div>
	);
}

function InputButton() {
  const [showInputBox, setShowInputBox] = useState(false);

  const handleClick = () => {
    setShowInputBox(true);
  };

  const handleClose = () => {
    setShowInputBox(false);
  };

  return (
    <div className="Journal">
      {showInputBox ? (
        <InputBox onClose={handleClose} />
      ) : (
        <button onClick={handleClick}>Journal</button>
      )}
    </div>
  );
}

export default InputButton;
