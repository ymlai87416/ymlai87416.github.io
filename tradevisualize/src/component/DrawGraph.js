import { AdvancedChart } from "react-tradingview-embed";
 
const DrawGraph = ({plotCommand, tradeData}) => {
  return (
    <div>
      <AdvancedChart widgetProps={{"theme": "dark"}} />
    </div>
  )
}

export default DrawGraph