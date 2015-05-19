module.exports = {
  $: require('jquery'),
  CryptoJS: require('crypto-js'),
  MyWallet: require('./wallet'),
  WalletStore: require('./wallet-store'),
  WalletCrypto: require('./wallet-crypto'),
  Spender: require('./wallet-spender'),
  ImportExport: require('./import-export'),
  BlockchainAPI: require('./blockchain-api'),
  BlockchainSettingsAPI: require('./blockchain-settings-api'),
  Wallet: require('./w'),
  Address: require('./a'),
  Helpers: require('./helpers'),
  // only for debugging
  Bitcoin: require('bitcoinjs-lib'),
  Base58: require('bs58'),
  BigInteger: require('bigi')
};
