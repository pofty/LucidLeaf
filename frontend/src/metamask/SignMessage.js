import { MetaMaskSDK } from "@metamask/sdk";

const MMSDK = new MetaMaskSDK({
  dappMetadata: {
    name: "LucidLeaf dapp",
    url: window.location.href,
  },
  // Other options
});

const ethereum = MMSDK.getProvider();

