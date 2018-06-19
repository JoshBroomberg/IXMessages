const EthCrypto = require('eth-crypto');

// DEBUG
// const MSG = "cbb9b1866c80b7fe16a69ad363d4127803288fac785d20417b8237d45bb7ecdd9cb668586d0c9c6a6d1133c3fd4e346afb99215abacb2516ff2a046211bc294030844a98438a859d8f7c7e1631c9defd7af718423603548f3c0d485ea3cafb043f";
// const PRIVKEY = "0xc4d19317a1fd2832b1f690417fe00f51cd07ef2a265a2ac4f424284bc4d80b6c";

async function decrypt(message, privKey) {
  const encryptedDict = EthCrypto.cipher.parse(message);
  const decryptedMessage = await EthCrypto.decryptWithPrivateKey(
        privKey,
        encryptedDict
    );
  return decryptedMessage;
}

module.exports = decrypt
