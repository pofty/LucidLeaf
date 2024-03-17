import React, { useState } from 'react';
import './InputBox.css';
import {getPublicAddress, encryptMessage, getEncryptionKey} from './metamask/CryptMessage.js';
import {uploadText} from "./lighthouse/UploadText.js";
import {JournalType} from "./constants/JournalType.js";

function InputBox({ onClose }) {
    const [inputValue, setInputValue] = useState('');
    const [labelValue, setLabelValue] = useState('');
    const [uploadStatus, setUploadStatus] = useState('⏱️ Not Yet upload');
    const [ipfsHash, setIpfsHash] = useState('');
    const [encryptButtonText, setEncryptButtonText] = useState('Retrieve Encryption Key and Encrypt');
    const [uploadButtonText, setUploadButtonText] = useState('Upload to IPFS network on FileCoin');
    const [isIpfsLinkVisable, setIpfsLinkVisibility] = useState(false);
    const [isEncryptedAlreadyDone, setIsEncryptedAlreadyDone] = useState(false);
    const [isAlreadyUploaded, setIsAlreadyUploaded] = useState(false);



    const handleChange = event => setInputValue(event.target.value);

    const updateLabelValue = (newValue) => {
        setLabelValue(newValue);
    };

    const updateUploadStatus = (newValue) => {
        setUploadStatus("✅ Uploaded");
        setIpfsHash(newValue.toString());
        setIpfsLinkVisibility(true);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const encryptedMessage = await encryptMessage(inputValue);
        updateLabelValue(encryptedMessage);
        setInputValue(inputValue)
        setIsEncryptedAlreadyDone(true);
        setEncryptButtonText("✅ Retrieved Key and Encrypted");
    };

    const handleUpload = () => {
        console.log('Upload button clicked');
        uploadText(labelValue, JournalType.DIARY.toString()).then(returned => updateUploadStatus(returned));
        //updateUploadStatus("✅ Uploaded")
        setIsAlreadyUploaded(true);
        setUploadButtonText("✅ Uploaded to IPFS network on FileCoin");
    }

return (
    <div className="InputBox">
        <form onSubmit={handleSubmit}>
            <label>{"in ciphered text using your wallet keys:"}</label>
            <br></br>
            <label>{labelValue}</label>
            <textarea value={inputValue} onChange={handleChange}/>
            <label>{uploadStatus}</label>
            <a href={`https://gateway.lighthouse.storage/ipfs/${ipfsHash}`} target="_blank" rel="noopener noreferrer">
{isIpfsLinkVisable && <label>{`https://gateway.lighthouse.storage/ipfs/${ipfsHash}`}</label>}              </a>
        <div className="button-group">
            <button type="submit" disabled={isEncryptedAlreadyDone} >{encryptButtonText}</button>
            <button type="upload" disabled={isAlreadyUploaded} onClick={handleUpload}>{uploadButtonText} </button>
            <button type="close" onClick={onClose}>Close and Go Back</button>

            </div>
        </form>
    </div>
);
}

export default function InputButton() {
    const [showInputBox, setShowInputBox] = useState(false);

    return (
        <div className="Journal">
            {showInputBox ? <InputBox onClose={() => setShowInputBox(false)} /> : <button type="journal" onClick={() => setShowInputBox(true)}>Journal</button>}
        </div>
    );
}