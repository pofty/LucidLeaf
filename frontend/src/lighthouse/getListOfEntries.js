import lighthouse from '@lighthouse-web3/sdk'
import {ApiKeys} from "../constants/ApiKeys.js";
import {DownloadedRecord} from "../dataStructures/DownloadedRecord.js";


const getListOfEntries = async() =>{
  /*
    @param {string} apiKey - Your API key.
    @param {number} [pageNo=1] - The page number for pagination, defaults to 1.
  */
    return await lighthouse.getUploads(ApiKeys.LIGHTHOUSE_V1.toString());
}


getListOfEntries().then(response => {
    for (let i = 0; i < response.data.fileList.length; i++) {
       const entry = new DownloadedRecord(response.data.fileList[i]).getProperty('cid')
        console.log(entry);
    }
});