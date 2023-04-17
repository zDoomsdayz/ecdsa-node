const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

const privateKeys = secp.secp256k1.utils.randomPrivateKey();
console.log("====================================================");
console.log("private key", toHex(privateKeys));

const publicKey = secp.secp256k1.getPublicKey(privateKeys);

console.log("public key", toHex(publicKey));

console.log("====================================================");