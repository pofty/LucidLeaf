import lighthouse from '@lighthouse-web3/sdk'

const text = "Hello LucidLeaf from ETHGlobal Hackathon!"
const apiKey = "a3b23b40.cea760f064c04b99aedb77acf3117ea0"
const name = "Hasan" //Optional

const response = await lighthouse.uploadText(text, apiKey, name)

console.log(response)
o