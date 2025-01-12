const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");
const secp = require("ethereum-cryptography/secp256k1");

const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "035907545f0cd8ff23a1931749c16369530928b0e4ebc0ccd0d8632cff1e05cfd3": 100,
  "03115670df0bdfedb05a303ac66a8aff3287deae4355428cee62ef528d845ff658": 50,
  "039ab2fac13dc78775870e2e4c57c90b8820a766f8fb67544930cfb599416cab41": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount, signature } = req.body;

  //convert signature back to BigInt object
  const bigSignature = JSON.parse(signature, (key, value) => {
    if (typeof value === 'string') {
      return BigInt(value);
    }
    return value;
  });

  //server uses public address as hash message
  const messageHash = keccak256(utf8ToBytes(sender));
  const isSigned = secp.secp256k1.verify({r:bigSignature.r, s:bigSignature.s}, messageHash, sender);

  if (!isSigned) {
    res.status(400).send({ message: "Signature is not verified!" });
    return;
  }

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
