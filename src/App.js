import logo from "./logo.svg";
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
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				<button className="main-mint-btn" onClick={connect}>
					Mint
				</button>
			</header>
		</div>
	);
}

export default App;
