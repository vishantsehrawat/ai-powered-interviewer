import React from 'react'
import ChartComponent from './charts/ChartComponent'
import PieChart from './charts/PieChart'
import VoiceToTextComponent from '../Components/VoiceToTextComponent'

const Result = () => {
  return (
    <>
    <br />
    <br />
    <div style={{width:"90%",margin:"auto",display:"flex",justifyContent:"space-between"}}>
      <div style={{width:"40%"}}>
      <ChartComponent/>
      </div>
      <div style={{width:"40%"}}>
      <PieChart/>
      </div>
    </div>
    </>
  )
}

export default Result
