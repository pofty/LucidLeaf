import React, { useState } from 'react';
import './InputBox.css';
import {getPublicAddress, encryptMessage, getEncryptionKey} from './metamask/CryptMessage.js';

function InputBox({ onClose }) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = event => setInputValue(event.target.value);

    const handleSubmit = async event => {
        event.preventDefault();
        const encryptedMessage = await encryptMessage(inputValue);
        setInputValue(encryptedMessage);
    };

    return (
        <div className="InputBox">
            <form onSubmit={handleSubmit}>
                <textarea value={inputValue} onChange={handleChange}/>
                <button type="submit">Encrypt and Submit</button>
                <button onClick={onClose}>Close</button>
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