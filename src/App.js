import styled from "styled-components";
import logo from "./Carrotsnets_logo.png";
import gif from "./Carrotpicking.gif";
import bye from "./Carrotbye.gif";
import leaf from "./leaf.png";
import "./App.css";

const Carrots_gif = styled.img`
  height: 15vh;
  pointer-events: none;
  position: relative;
  bottom: 19.8vh;
  z-index: 1;
`;

const Bye = styled(Carrots_gif)`
  left: 25.5vw;
`;

const Leaf = styled.img`
  height: 10vh;
  width: 8vw;
  position: relative;
  z-index: 2;
`;

const Leaf1 = styled(Leaf)`
  bottom: 4vh;
  right: 32vw;
`;

const Leaf2 = styled(Leaf)`
  bottom: 3vh;
  left: 13vw;
`;

const Leaf3 = styled(Leaf)`
  left: 18vw;
`;

const Leaf4 = styled(Leaf)`
  right: 47vw;
  top: 7vh;
`;

const Leaf5 = styled(Leaf)`
  bottom: 3vh;
  left: 13vw;
`;

const Leaf6 = styled(Leaf)`
  bottom: 3vh;
  left: 13vw;
`;

const Leaf7 = styled(Leaf)`
  bottom: 3vh;
  left: 13vw;
`;

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
          Connected Wallet:
          <span className="wallet_address">0xFcc....05e0</span>
        </p>
        <button className="mint-btn" onClick={connect}>
          Mint
        </button>
        <div>
          <Carrots_gif src={gif} />
          <Bye src={bye} />
        </div>
        <div className="ground">
          <Leaf1 src={leaf} />
          <Leaf2 src={leaf} />
          <Leaf3 src={leaf} />
          <Leaf4 src={leaf} />
          <Leaf5 src={leaf} />
          <Leaf6 src={leaf} />
          <Leaf7 src={leaf} />
        </div>
      </header>
    </div>
  );
}

export default App;
