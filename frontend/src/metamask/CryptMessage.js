import CryptoJS from 'crypto-js';


let EncryptionKey = "";
let publicAddress = "";

async function getPublicAddress(message) {
    if (publicAddress !== "") {
        return publicAddress;
    }
    try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log("the getPublicAddress response was", accounts);
        publicAddress = accounts;
        return accounts
    }
    catch (error) {
      console.error('Error encrypting message:', error);
    }
    return null;
}

async function getEncryptionKey(message) {
    if (EncryptionKey !== "") {
        return EncryptionKey;
    }
    try {
        const getEncryptionKey = await window.ethereum.request({
            method: 'eth_getEncryptionPublicKey',
            params: [await getPublicAddress(message).then((result) => {return result[0]})]
        });
        console.log("the getEncryptionKey response was", getEncryptionKey);
        EncryptionKey = getEncryptionKey;
        return getEncryptionKey;
    }
    catch (error) {
      console.error('Error encrypting message:', error);
    }
    return null;
}

export async function encryptMessage(plainText) {
    console.log("The plainText is", plainText);
    console.log("attempting to encrypt message");
   return CryptoJS.AES.encrypt(plainText, getEncryptionKey()).toString();
}

async function decryptMessage(encryptedMessage) {
const bytes = CryptoJS.AES.decrypt(encryptedMessage, getEncryptionKey());
  return bytes.toString(CryptoJS.enc.Utf8);
}

export default {encryptMessage, decryptMessage};
