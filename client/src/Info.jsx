import server from "./server";

function Info() {
  return (
    <div className="container wallet">
      <h1>Fake Wallet</h1>

      <label>
        <b>Fake Wallet 1:</b>
          <div>
            Private Key:
            963e511900282aab7a4d4cef5cecadcd56f7bfde5be1fae3fe0d2d1545ae7fc8
          </div>
          <div>
            Public Address:
            039ab2fac13dc78775870e2e4c57c90b8820a766f8fb67544930cfb599416cab41
          </div>
      </label>

      <label>
        <b>Fake Wallet 2:</b>
          <div>
            Private Key:
            69a978c30de67449a48b9c335ae44eb5203fa71a4a9b80962b89f9046aac499d
          </div>
          <div>
            Public Address:
            03115670df0bdfedb05a303ac66a8aff3287deae4355428cee62ef528d845ff658
          </div>
      </label>

      <label>
        <b>Fake Wallet 3:</b>
          <div>
            Private Key:
            524069cfb830e1367b84df666601a8ca7e6733fd77726f06d144159febbd569f
          </div>
          <div>
            Public Address:
            035907545f0cd8ff23a1931749c16369530928b0e4ebc0ccd0d8632cff1e05cfd3
          </div>
      </label>

    
    </div>
  );
}

export default Info;
