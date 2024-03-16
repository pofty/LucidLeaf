import React, { useState } from 'react';
import './InputBox.css';
import {getPublicAddress, encryptMessage, getEncryptionKey} from './metamask/CryptMessage.js';

function InputBox({ onClose }) {
    const [inputValue, setInputValue] = useState('');
    const [labelValue, setLabelValue] = useState('');


    const handleChange = event => setInputValue(event.target.value);

    const updateLabelValue = (newValue) => {
        setLabelValue(newValue);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const encryptedMessage = await encryptMessage(inputValue);
        updateLabelValue(encryptedMessage);
        setInputValue(inputValue)
    };

    const handleUpload = () => {
        console.log('Upload button clicked');
        // Add your upload logic here
    };

return (
    <div className="InputBox">
        <form onSubmit={handleSubmit}>
            <label>{"in ciphered text using your wallet keys:"}</label>
            <br></br>
            <label>{labelValue}</label>
            <textarea value={inputValue} onChange={handleChange}/>
            <div className="button-group">
                <button type="submit">Get Key and Encrypt</button>
                <button type="upload" onClick={handleUpload}>Upload</button>
                <button type="close" onClick={onClose}>Close</button>

            </div>
        </form>
    </div>
);
}

export default function InputButton() {
    const [showInputBox, setShowInputBox] = useState(false);

    return (
        <div className="Journal">
            {showInputBox ? <InputBox onClose={() => setShowInputBox(false)} /> : <button onClick={() => setShowInputBox(true)}>Journal</button>}
        </div>
    );
}