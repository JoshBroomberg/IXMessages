const EthCrypto = require('eth-crypto');

const MSG = "132d4c9050156a70f260b2e46e6285510234b5603c468214b467461cce281c519b15f5608d5bac2cdfa33f5d4c5e02427fd8a02ec369500b9661ba0e058fd36f3722845b5d9240741f01dfc4154cd8af74c94b1195e6aff444d9f6d59fd6d2c346";
const PRIVKEY = "0x9823f0cd339405497e801d6f043314c8ffa0659371a38bab3cf3f120cb4963a6";

async function decrypt(message, privKey) {
  const encryptedDict = EthCrypto.cipher.parse(message);
  const decryptedMessage = await EthCrypto.decryptWithPrivateKey(
        privKey,
        encryptedDict
    );
  return decryptedMessage;
}

decrypt(MSG, PRIVKEY).then(result => {
  console.log("Your message is below\n------------\n\n" + result);
}).catch(error => {
  console.log(error);
})
