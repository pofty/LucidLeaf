import React, { useState } from 'react';
import './Messages.css';
import { JournalType } from './constants/JournalType.js';

function Messages() {
    const [selectedType, setSelectedType] = useState('');

    const handleChange = (event) => {
        setSelectedType(event.target.value);
    };

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
        </div>
    );
}

export default Messages;
