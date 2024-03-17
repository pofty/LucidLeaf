import logo from './Logo.png';
import './App.css';
import ConnectButton from './ConnectButton.js';
import SwitchView from './SwitchView.js';

function App() {
  return (
    <div className="App">
        <SwitchView switchText="Your text here" /> {/* Pass the text to the SwitchView component */}
		<ConnectButton />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;