import React, { useState } from 'react';
import './Messages.css';
import { JournalType } from './constants/JournalType.js';
import lighthouse from '@lighthouse-web3/sdk'
import { ApiKeys } from "./constants/ApiKeys.js";
import { DownloadedRecord } from "./dataStructures/DownloadedRecord.js";
import DisplayRecords from './DisplayRecords.js';
import getListOfEntries from './lighthouse/getListOfEntries.js';

function Messages() {
    const [selectedType, setSelectedType] = useState('');
    let [records, setRecords] = useState([]);

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
			records = listOfObjects;
		});
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
            <DisplayRecords records={records} />
        </div>
    );
}

export default Messages;
