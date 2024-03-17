import React, { useState, useEffect } from 'react';
import './DisplayRecords.css'; // Import the CSS file
import epochToDate from './dataStructures/EpochTime.js';
import getIpfsData from "./lighthouse/getIpfsData.js";
import {decryptMessage} from "./metamask/CryptMessage.js";
import {DownloadedRecord} from "./dataStructures/DownloadedRecord.js";

function DisplayRecords({ records, onClose }) {
    const [displayContent, setDisplayContent] = useState(null);
    const [encryptedText, setEncryptedText] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

    useEffect(() => {
        if (records.length > 0) {
            getIpfsData(new DownloadedRecord(records[0]).getProperty("cid")).then(text => {
                console.log("encrypted format text: ", text);
                setEncryptedText(text); // Update the state when the Promise resolves
                decryptMessage(text).then(decryptedText => {
                    console.log("decrypted format text: ", decryptedText);
                    setDecryptedText(decryptedText); // Update the state when the Promise resolves
                });
            });
        }
    }, [records]);

    const handleDisplay = async (record) => {
        console.log("button clicked")
        const decryptedMessage = await decryptMessage(await getIpfsData(new DownloadedRecord(records[0]).getProperty("cid")));
        return (
            <div className="RecordsContainer">
                <div className="cid">Cid</div>
                <div className="encrypted">temp(</div>
                <button className="unencrypt">{decryptedMessage}</button>
                <div className="decrypt"></div>
            </div>
        )
    }

    const handleClick = async (records) => {
        const content = await handleDisplay(records);
        setDisplayContent(content);
    };

    console.log('DisplayRecords:', records);
    return (
        <div className="rectangle-container">
            <button onClick={onClose} className="close-button">Close</button>
            {records.map((record, index) => (
                <div key={index} className="rectangle">
                    <div className="rectangle-content">
                        <span className="rectangle-date">{epochToDate(record.getProperty("createdAt"))}</span>
                    </div>
                    <div className="rectangle-content">
                        <span className="rectangle-text">{"CID:" + record.getProperty("cid")}</span>
                    </div>
                    <label>{`Encrypted Text:` + encryptedText}</label>
                    <br></br>
                    <label>{`Decrypted Text:` + decryptedText}</label>
                </div>
            ))}
            {displayContent && displayContent}
        </div>
    );
}

export default DisplayRecords;