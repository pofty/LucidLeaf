import lighthouse from '@lighthouse-web3/sdk'
import {ApiKeys} from "../constants/ApiKeys.js";
import {JournalType} from "../constants/JournalType.js";

/**
* Use this function to upload an encrypted text string to IPFS.
*
* @param {string} text - The text you want to upload.
* @param {string} apiKey - Your unique Lighthouse API key.
* @param {string} publicKey - Your wallet's public key.
* @param {string} signedMessage - A message you've signed using your private key.
* @param {string} [name] - optional name for text
*
* @return {object} - Details of the uploaded file on IPFS.
*/

const yourText = "Hello LucidLeaf"
const apiKey = ApiKeys.LIGHTHOUSE_V1.toString()
const publicKey = '0x477D6d7B75D6bb2a0e4B9e6339ae07374cfFaA27'
const signedMessage = "SIGNATURE/JWT"
const name = "anime"

const response = await lighthouse.textUploadEncrypted(yourText, apiKey, publicKey, signedMessage)
console.log(response)
