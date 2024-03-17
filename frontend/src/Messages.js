import React, { useState } from 'react';
import './Messages.css';
import { JournalType } from './constants/JournalType.js';
import DisplayRecords from './DisplayRecords.js';

function Messages() {
    const [selectedType, setSelectedType] = useState('');
    const [journalRecords, setJournalRecords] = useState([]); // Add a state variable for the journal records

    const handleChange = (event) => {
        setSelectedType(event.target.value);
    };

    const getRecords = () => {

    }

    return (
        <div className="Container">
            <div className="JournalType">
                <label htmlFor="journalType">Choose a Journal Type: </label>
                <select id="journalType" value={selectedType} onChange={handleChange}>
                    <option value="">Select</option>
                    {Object.values(JournalType).map((type, index) => (
                        <option key={index} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>
            <button className="GetRecords">Get Records</button>
            <DisplayRecords numberOfRectangles={journalRecords.length} /> {/* Use DisplayRecords here */}
        </div>
    );
}

export default Messages;