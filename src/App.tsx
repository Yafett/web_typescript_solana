import './App.css';
import MintNft from './MinNft';
import MintToken from './MintToken';
import SendSol from './SendSol';
import { ImagePick } from './ImagePicker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='divider'>
          <h4>TOKEN</h4>
          <MintToken />
          <MintNft />
          <SendSol />
        </div>
        <div className='divider'>
          <h4>IMAGE</h4>
          <ImagePick />
        </div>
      </header>
    </div>
  );
}

export default App;
