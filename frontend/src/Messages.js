import React, { useState } from 'react';
import './Messages.css';
import { JournalType } from './constants/JournalType.js';
import lighthouse from '@lighthouse-web3/sdk'
import { ApiKeys } from "./constants/ApiKeys.js";
import { DownloadedRecord } from "./dataStructures/DownloadedRecord.js";
import DisplayRecords from './DisplayRecords.js'; // Ensure this path is correct
import getListOfEntries from './lighthouse/getListOfEntries.js';

function Messages() {
    const [selectedType, setSelectedType] = useState('');
    let [records, setRecords] = useState([]);
    const [isDisplayRecordsVisible, setIsDisplayRecordsVisible] = useState(false);


    const handleChange = (event) => {
        setSelectedType(event.target.value);
    };


const handleGetRecords = () => {
    console.log('Get Records button clicked');
    getListOfEntries().then(response => {
        let listOfObjects = []
        for (let i = 0; i < response.data.fileList.length; i++) {
            listOfObjects.push( new DownloadedRecord(response.data.fileList[i]));
        }
        console.log('listOfObjects:', listOfObjects);
        setRecords(listOfObjects);
        setIsDisplayRecordsVisible(true); // Show DisplayRecords when Get Records button is clicked
    });
    };

    const handleCloseDisplayRecords = () => {
        setIsDisplayRecordsVisible(false); // Hide DisplayRecords when close button is clicked
    };

return (
    <div className="Container">
        <div className="JournalType">
            <label htmlFor="journalType">Choose a Journal Type: </label>
            <select id="journalType" value={selectedType} onChange={handleChange}>
                <option value="">Select</option>
                {Object.values(JournalType).map((type, index) => (
                    <option key={index} value={type.toString()}>
                        {type}
                    </option>
                ))}
            </select>
        </div>
        <button className="GetRecords" onClick={handleGetRecords}>Get Records</button>
        {isDisplayRecordsVisible && <DisplayRecords records={records} onClose={handleCloseDisplayRecords} />}
    </div>
);
}

export default Messages;