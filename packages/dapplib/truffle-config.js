require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone stone royal sad miss gesture ghost army general'; 
let testAccounts = [
"0x8d2d124f04b2d32defa25ec7068510938cc20d36bb94ff3d65bfcc0adbfbddaa",
"0x96e0cd2e46189e06ed8b1aeb945d7eb9cc48f6191d176e96d5f8aa0bd9ab105c",
"0xa6f2787b313c62ebade9c7361b33990971473d0db1bccdfc28cc9ca8764dd190",
"0xcbbe8ce08be7a0fe03bae88d450ce391265264e5b5410c8c57ce5374812db965",
"0x0078efb691faf8c62d9f8f0373bfe3ff28aef577fb2fe2e4c6c7fc90783efb9c",
"0x63556a92d58da870e42c4e6825d094080b9c386133c71363aa411054cd468879",
"0xd8be43db4cd74d0575870352045c80a862e855bc31c8dfa355cb72f652dce22f",
"0xc8aa6cea7c856493659d2d46abbee399b38a18a4392c6a4cc6aec763a4ed68d8",
"0x81906bdc2eccba9ca13544becc745b9a6ce736e90ef7e5cbe73e94fbc586342b",
"0xec9d1b522d494778e8836afbeb29f8874eb2b67c4df4334fc397335fa1463e42"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

