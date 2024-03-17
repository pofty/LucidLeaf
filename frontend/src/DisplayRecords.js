import React, { useState } from 'react';
import './DisplayRecords.css'; // Import the CSS file
import epochToDate from './dataStructures/EpochTime.js';
import getIpfsData from "./lighthouse/DownloadCidData.js";
import {decryptMessage} from "./metamask/CryptMessage.js";
import {DownloadedRecord} from "./dataStructures/DownloadedRecord.js";

function DisplayRecords({ records, onClose }) {
    const [displayContent, setDisplayContent] = useState(null);
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
                </div>
            ))}
            {displayContent && displayContent}
        </div>
    );
}

export default DisplayRecords; // Add this line at the end of the file