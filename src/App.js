import logo from "./Carrotsnets_logo.png";
import gif from "./Carrotpicking.gif";
import "./App.css";

function App() {
  const kaikasLogin = async () => {
    try {
      const wallet = await window.klaytn.enable();
    } catch (ex) {
      console.log(ex);
    }
  };
  const connect = () => {
    if (typeof window.klaytn !== "undefined") {
      // Kaikas user detected. You can now use the provider.
      const provider = window["klaytn"];
      kaikasLogin();
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Carrotsnets-logo" alt="Carrotsnets" />
        <p className="connected_wallet">
          {" "}
          Connected Wallet:
          <span className="wallet_address">0xFcc....05e0</span>
        </p>
        <button className="mint-btn" onClick={connect}>
          Mint
        </button>
        <img src={gif} className="Carrotpicking" />
        <div className="ground"></div>
      </header>
    </div>
  );
}

export default App;
