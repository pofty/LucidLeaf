import React, { useState } from 'react';
import './DisplayRecords.css'; // Import the CSS file
import epochToDate from './dataStructures/EpochTime.js';

function handleDisplay(records) {
	console.log("button clicked")
    return (
        <div className="RecordsContainer">
            <div className="cid">Cid</div>
            <div className="encrypted">Encrypted Text</div>
            <button className="unencrypt">Unencrypt</button>
            <div className="decrypt"></div>
        </div>
    )
}

    const handleClick = (records) => {
        const content = handleDisplay(records);
        setDisplayContent(content);
    };


function DisplayRecords({ records, onClose }) {
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
