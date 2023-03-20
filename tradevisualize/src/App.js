import logo from './logo.svg';
import './App.css';
import DrawGraph from './component/DrawGraph';
import ImageBase64 from './component/ImageBase64';
import LoadTradeRecord from './component/LoadTradeRecord';

function App() {
  return (
    <div className="App">
      <div style="height: 100px; background-color: rgba(255,0,0,0.1);">
        <div class="h-75 d-inline-block" style="background-color: rgba(0,0,255,.1)">
          <div>
            <DrawGraph />
            <ImageBase64></ImageBase64>
          </div>
        </div>
        <div class="h-25 d-inline-block" style="background-color: rgba(0,0,255,.1)">
          <LoadTradeRecord />
        </div>
      </div> 
    </div>
  );
}

export default App;
