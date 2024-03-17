
const getIpfsData = async (cid) => {
    return fetch('https://cloudflare-ipfs.com/ipfs/' + cid)
        .then(response => response.text())
        .then(html => {
            return html; // the value of the IPFS data
        })
        .catch(error => {
            console.error('Error fetching the page: ', error);
        });
}
export default getIpfsData;