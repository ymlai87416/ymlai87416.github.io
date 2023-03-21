import logo from './logo.svg';
import './App.css';
import DrawGraph from './component/DrawGraph';
import LoadTradeRecord from './component/LoadTradeRecord';

function App() {
  const [data, setData] = useState([]);
  const [plotCommand, setPlotCommand] = useState([]);

  return (
    <div className="App">
      <div style="height: 100px; background-color: rgba(255,0,0,0.1);">
        <div class="h-25 d-inline-block" style="background-color: rgba(0,0,255,.1)">
          <LoadTradeRecord />
        </div>
        <div class="h-75 d-inline-block" style="background-color: rgba(0,0,255,.1)">
          <div>
            <DrawGraph />
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;
