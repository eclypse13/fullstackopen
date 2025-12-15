import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = ({ good, neutral, bad, total }) => {
  const average = (good - bad) / total
  const positive = good / total * 100

  if (!good && !neutral && !bad) {
    return (
      <>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </>
    )
  }
  return (
  <>
    <h2>Statistics</h2>
    <table>
      <tbody>
        <StatisticsLine text="Good" value={good}/>
        <StatisticsLine text="Neutral" value={neutral}/>
        <StatisticsLine text="Bad" value={bad}/>
        <StatisticsLine text="Total" value={total} />
        <StatisticsLine text="Average" value={average} />
        <StatisticsLine text="Positive" value={positive} />
      </tbody>
    </table>
    
  </>
  )
}

const StatisticsLine = ({ text, value }) => {
  if (text === "Positive") return (
    <tr>
      <td>{text}</td>
      <td>{value}%</td>
    </tr>
  )
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  let [good, setGood] = useState(0)
  let [neutral, setNeutral] = useState(0)
  let [bad, setBad] = useState(0)
  let [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    setGood(++good)
    setTotal(++total)
  }
  const handleNeutralClick = () => {
    setNeutral(++neutral)
    setTotal(++total)
  }
  const handleBadClick = () => {
    setBad(++bad)
    setTotal(++total)
  }

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button onClick={handleGoodClick} text="Good" />
      <Button onClick={handleNeutralClick} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App