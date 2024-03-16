import lighthouse from '@lighthouse-web3/sdk'
import {ApiKeys} from "../constants/ApiKeys.js";

export async function uploadText(inputText, journalType) {
    const apiKey = ApiKeys.LIGHTHOUSE_V1.toString()
    const response = await lighthouse.uploadText(inputText, apiKey, journalType)
    console.log("response from the lighthouse uploadText function: ", response)

    // return the IPFS hash
    console.log("response.data.Hash: ", response.data.Hash)
    return response.data.Hash;
}

