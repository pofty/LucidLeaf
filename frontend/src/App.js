import logo from './Logo.png';
import './App.css';
import ConnectButton from './ConnectButton.js';
import SwitchView from './SwitchView.js';

function App() {
  return (
    <div className="App">
		<ConnectButton />
		<SwitchView />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
