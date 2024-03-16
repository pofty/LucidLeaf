export class DownloadedRecord {
  constructor(data) {
    this.publicKey = data.publicKey;
    this.fileName = data.fileName;
    this.mimeType = data.mimeType;
    this.txHash = data.txHash;
    this.status = data.status;
    this.createdAt = data.createdAt;
    this.fileSizeInBytes = data.fileSizeInBytes;
    this.cid = data.cid;
    this.id = data.id;
    this.lastUpdate = data.lastUpdate;
    this.encryption = data.encryption;
  }
  getProperty(propertyName) {
    return this[propertyName];
  }
}
//
// const data = {
//   publicKey: '0x6f32964275824cd12c2efb01fef4a0655813f971',
//   fileName: 'DIARY',
//   mimeType: false,
//   txHash: '',
//   status: 'queued',
//   createdAt: 1710628498421,
//   fileSizeInBytes: '52',
//   cid: 'QmTkkvqBZNg53sBQbQ31MbhGo1MDRU3zrs3noFViFbN7vr',
//   id: '4f733d27-f266-4144-a5ba-deb52ec875c2',
//   lastUpdate: 1710628498421,
//   encryption: false
// };
//
// const record = new DownloadedRecord(data);
// console.log(record.getProperty('cid')); // Outputs: DIARY
