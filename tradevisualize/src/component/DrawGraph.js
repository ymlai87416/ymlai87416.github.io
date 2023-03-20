import { AdvancedChart } from "react-tradingview-embed";
 
const DrawGraph = () => {
  return (
    <div>
      <AdvancedChart widgetProps={{"theme": "dark"}} />
      <div>
        <input type='text'/>
        <p> Enter the command here: </p>
      </div>
    </div>
  )
}

export default DrawGraph