import { useState } from 'react'

const Button = ({handleClick,text}) => <button onClick = {handleClick}>{text}</button>

const Statistics = ({good, neutral, bad}) =>{
  const Good = {good}
  const Neutral = {neutral}
  const Bad = {bad}
  const total = Good.good+Neutral.neutral+Bad.bad;
  console.log("Total", total)
  if(total === 0) return <p>No feedback given</p>
  return(    
    <>    
      <h3>Statistics</h3>
      <table>
        <tr>
          <td>Good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>Neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>Bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{total}</td>
        </tr>
        <tr>
          <td>Average</td>
          <td>{total/3}</td>
        </tr>
        <tr>
          <td>Positive</td>
          <td>{(good/total)*100}</td>
        </tr>
      </table>
    </>
  )
}
const Unicafe = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickOnGood = () => setGood(good+1)
  const clickOnNeutral = () => setNeutral(neutral+1)
  const clickOnBad = () => setBad(bad+1)  

  return (
    <div>
      <h2>Give feedback</h2>
      <Button handleClick = {clickOnGood} text = "Good"/>
      <Button handleClick = {clickOnNeutral} text = "Neutral"/>
      <Button handleClick = {clickOnBad} text = "Bad"/>      
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default Unicafe