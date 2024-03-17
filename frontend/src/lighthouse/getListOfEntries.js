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
    let listOfObjects = []
    for (let i = 0; i < response.data.fileList.length; i++) {
       listOfObjects.push( new DownloadedRecord(response.data.fileList[i]));
    }
});
export default getListOfEntries;