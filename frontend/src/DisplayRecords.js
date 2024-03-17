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

function DisplayRecords({ records }) {
    const [displayContent, setDisplayContent] = useState(null);

    const handleClick = () => {
        const content = handleDisplay(records);
        setDisplayContent(content);
    };

    return (
        <div className="rectangle-container">
            {records.map((record, index) => (
                <div key={index} className="rectangle">
                    <div className="rectangle-content">
                        <span className="rectangle-date">{epochToDate(record.getProperty("createdAt"))}</span>
                    </div>
                    <div className="rectangle-content">
                        <span className="rectangle-text">{record.getProperty("cid")}</span>
                    </div>
                    <button className="access-button" onClick={handleClick}></button>
                </div>
            ))}
            {displayContent && displayContent}
        </div>
    );
}

export default DisplayRecords;
