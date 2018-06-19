const EthCrypto = require('eth-crypto');

let plain_message_dict = {
  "Poppy": "Test message 2",
  "Josh": "Another test"
};

var encrypted_messages = {};

async function encrypt() {
  for(var person in plain_message_dict){
    var identity = EthCrypto.createIdentity();
    const pubKey = identity["publicKey"];
    const encryptedDict = await EthCrypto.encryptWithPublicKey(
          pubKey,
          plain_message_dict[person] // message
      );
    const encryptedStr = EthCrypto.cipher.stringify(encryptedDict);
    identity["message"] = encryptedStr
    encrypted_messages[person] = identity
  }
}


encrypt().then(result => {
  console.log(encrypted_messages);
}).catch(error => {
  // if you have an error
  console.log(error);
})



// { iv: '13932f8db6182472501f097cbd2627c2', ephemPublicKey: '049b2e5c19bc276967739a90de4b6b6a3f70489a6c490b08206b60ca79549d97a12a3329b0840ef698b19c96812e86a30ad13016f90098206c8c3c5b32152d5500', ciphertext: '09c34b7284f9f24e15174f239cbfd4fe', mac: '8991d0536f16908ab809559094b72be9577df9604fc4dd62897b6d92f6201f89' }
