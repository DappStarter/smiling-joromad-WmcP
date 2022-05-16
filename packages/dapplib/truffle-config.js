require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note predict unusual hunt help flip general'; 
let testAccounts = [
"0xaaa0515193146f1e71401f2da66abf32d39abdeec8f6ab9fba68c42d2f05edb0",
"0x02de2c3f42ab828337fa5239e30f1baedf678ab483f1556f9b8ddfa77a0bfac7",
"0xda04971cc3cd678c03c99c9cc6cfc2346033005a60ee2eed8fe7be0e1ce3a665",
"0xb37457859417277ca9d636f4e04433f3ef158d0ff802e3c237e6d39ab273805e",
"0x3bc881ed8946e8efaa58a0410fe23169509ab1672da6f8c1b7f9931fdd70a392",
"0x4ba82a85994cda6fce01fae3287fdc37405f5242083bce34d739e249c44c302e",
"0xc4fcb68025644ea3a87da75296564c6cf2b7308c8b9c1364387ce740cb8acd30",
"0xd222262a97a9ce9112cc85691c52663872b9fcd81c53b8c1a7f3fa353fc916aa",
"0x2563721f5723acec2fdd5efc1c936b03cb0c08bad04fd18f935f00d721fde6ba",
"0x52fe3dd8339b1021419b0f7223e5293aa7ff69da2e85eff93eebe9d7bcfda1a4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


