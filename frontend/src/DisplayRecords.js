import React from 'react';
import './DisplayRecords.css'; // Import the CSS file
import epochToDate from './dataStructures/EpochTime.js';
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
                    <button className="access-button" > Access Record </button>

                </div>
            ))}
        </div>
    );
}

export default DisplayRecords;
