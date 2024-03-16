import CryptoJS from 'crypto-js';


let encryptionKey = "";
let publicAddress = "";

export async function getPublicAddress(message) {
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

export async function getEncryptionKey(message) {
    if (encryptionKey !== "") {
        return encryptionKey;
    }
    try {
        const getEncryptionKey = await window.ethereum.request({
            method: 'eth_getEncryptionPublicKey',
            params: [await getPublicAddress(message).then((result) => {return result[0]})]
        });
        console.log("the getEncryptionKey response was", getEncryptionKey);
        encryptionKey= getEncryptionKey;
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
    encryptionKey = await getEncryptionKey();
    const encryptedMessage = CryptoJS.AES.encrypt(plainText, encryptionKey).toString();
    console.log("The encrypted message is now", encryptedMessage);
    return encryptedMessage;
}

export async function decryptMessage(encryptedMessage) {
        encryptionKey = await getEncryptionKey();
        const bytes = CryptoJS.AES.decrypt(encryptedMessage, encryptionKey);
        return bytes.toString(CryptoJS.enc.Utf8);
}

export default {getPublicAddress, encryptMessage, decryptMessage, getEncryptionKey};
