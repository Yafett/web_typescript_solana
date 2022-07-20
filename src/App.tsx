import './App.css';
import MintNft from './MinNft';
import MintToken from './MintToken';
import SendSol from './SendSol';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MintToken />
        <MintNft />
        <SendSol />
      </header>
    </div>
  );
}

export default App;
