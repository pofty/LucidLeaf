
const getIpfsData = async (cid) => {
    fetch('https://gateway.lighthouse.storage/ipfs/' + cid)
        .then(response => response.text())
        .then(html => {
            return html; // the value of the IPFS data
        })
        .catch(error => {
            console.error('Error fetching the page: ', error);
        });
}