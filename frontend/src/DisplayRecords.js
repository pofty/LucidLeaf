import React, { useState } from 'react';
import './DisplayRecords.css'; // Import the CSS file
import epochToDate from './dataStructures/EpochTime.js';
import getIpfsData from "./lighthouse/DownloadCidData.js";
import {decryptMessage} from "./metamask/CryptMessage.js";
import {DownloadedRecord} from "./dataStructures/DownloadedRecord.js";

function DisplayRecords({ records, onClose }) {
    const [displayContent, setDisplayContent] = useState(null); // Move this line inside the function

    const handleDisplay = async (record) => {
        console.log("button clicked")
        return (
            <div className="RecordsContainer">
                <div className="cid">Cid</div>
                <div className="encrypted">temp(</div>
                <button
                    className="unencrypt">{await decryptMessage(getIpfsData(new DownloadedRecord(records[0]).getProperty("cid")))}</button>
                <div className="decrypt"></div>
            </div>
        )
    }


    const handleClick = (records) => {
        const content = handleDisplay(records);
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
                        <span className="rectangle-text">{record.getProperty("cid")}</span>
                    </div>
                    <button className="access-button" onClick={() => handleClick(records)}>Access Records</button>
                </div>
            ))}
            {displayContent && displayContent}
        </div>
    );
}

export default DisplayRecords;