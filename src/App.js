import styled from "styled-components";
import logo from "./imgs/Carrotsnets_logo.png";
import gif from "./imgs/Carrotpicking.gif";
import bye from "./imgs/Carrotbye.gif";
import leaf from "./imgs/leaf.png";
import Caver from "caver-js";
import "./App.css";

// const COUNT_CONTRACT_ADDRESS = ""; //사용할 컨트랙트 주소 입력
// const ACCESS_KEY_ID = ""; //KAS 에서 생성한 access key 입력
// const SECRET_ACCESS_KEY = ""; //KAS secretkey 입력
// const CHAIN_ID = ""; //mainnet 8217 testnet 1001 메인넷과 테스트넷 중 결정해서 입력
// const COUNT_ABI = ""; //클레이튼 ide 에서 코드 컴파일 후에 나오는 ABI 입력

// //아래 option 부분은 정해진 형식으로 KAS 가입자인지 확인하 때 사용
// const option = {
//   headers: [
//     {
//       name: "Authorization",
//       value:
//         "Basic" +
//         Buffer.from(ACCESS_KEY_ID + ":" + SECRET_ACCESS_KEY).toString("base64"),
//     },
//     { name: "x-chain-id", value: CHAIN_ID },
//   ],
// };

// //통신할 노드 알려주고 통신 연결
// const caver = new Caver(
//   new Caver.providers.HttpProvider(
//     "https://node-api.klaytnapi.com/v1/klaytn",
//     option
//   )
// );

// //실행할 컨트랙트의 함수 설명서와 주소 입력 아래 코드에서의 caver는 위의 caver 를 뜻함
// const CountContract = new caver.contract(
//   JSON.parse(COUNT_ABI),
//   COUNT_CONTRACT_ADDRESS
// );

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
  right: 20vw;
`;

const Leaf2 = styled(Leaf)`
  top: 13vh;
  right: 18vw;
`;

const Leaf3 = styled(Leaf)`
  right: 4vw;
  top: 20vh;
`;

const Leaf4 = styled(Leaf)`
  left: 10vw;
  top: 13vh;
`;

const Leaf5 = styled(Leaf)`
  bottom: 3vh;
  left: 13vw;
`;

const Leaf6 = styled(Leaf)`
  left: 18vw;
  top: 3vh;
`;

const Leaf7 = styled(Leaf)`
  left: 17vw;
  top: 20vh;
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
  // //컨트랙트를 실행하는 함수
  // const readCount = async () => {
  //   //CountContract.methods.실행할 함수.call();
  //   const _count = await CountContract.methods.count().call();
  // };
  // //getBalance 잔액 함수
  // const getBalance = (address) => {
  //   //블록체인에 클레이 잔고 요청 .then 답변이 왔을 때
  //   return caver.rpc.klay.getBalance(address).then((response) => {
  //     //peb으로 오는 값을 klay 로 변경
  //     const balance = caver.utils.convertFromPeb(
  //       //16진수로 오는 답변을 읽을 수 있게 변경
  //       caver.utils.hexToNumberString(response)
  //     );
  //     console.log(balance : ${balance})
  //     return balance;
  //   });
  // };

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
