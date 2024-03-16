import logo from './Logo.png';
import nouns from './bg-warm.png'
import './App.css';
import Navbar from './Navbar.js';
import Subtitle from './Subtitle.js';

function App() {
  return (
    <div className="App">
		<Navbar />
      <header className="App-header">
		<img src={nouns} className="logo"/>
		<div className="Title">LucidLeaf</div>
		<div>
		<Subtitle text="The Inner Self Explored and Shared Forever"/>
		</div>
	  </header>
    </div>
  );
}

export default App;
