import logo from './Logo.png';
import './App.css';
import ConnectButton from './ConnectButton';

function App() {
  return (
    <div className="App">
		<ConnectButton />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
