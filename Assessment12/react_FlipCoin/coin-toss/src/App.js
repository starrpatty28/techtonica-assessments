import React from "react"


//Object deconstructing
const { useEffect, useState, } = React

function App() {
  
  //useState (Hook) lets us define a variable and provide a function for updating that variable later on
  const [side, setSide] = useState(1)
  const [heads, setHeads] = useState(0)
  const [tails, setTails] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const tossed = heads + tails

  //Coin Toss Function
  const tossCoin = () => {
    const landedOn = Math.round(Math.random())

    //If Statement
    if (landedOn === 1) {
      setHeads(heads + 1)
    } else {
      setTails(tails + 1)
    }

    setSide(landedOn)
  }
  //Automatically tossing the coin
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        tossCoin()
      }
    }, 10)
    return () => clearInterval(interval)
  })

  

  return (
    <div>
      <p>The coin has been tossed {tossed} times.</p>
      <p>It landed on {side === 1 ? "heads" : "tails"}</p>
      <ul>
        <li>
          <label htmlFor="heads">Heads: {heads}</label>
          <meter id="heads" value={heads} max={tossed} />
        </li>
        <li>
          <label htmlFor="tails">Tails: {tails}</label>
          <meter id="tails" value={tails} max={tossed} />
        </li>
      </ul>
      <button onClick={() => setIsPaused(!isPaused)}>
        {!isPaused ? "Pause" : "Continue"}
      </button>{isPaused && <button onClick={tossCoin}>Toss Coin Count</button>}
    </div>
  )
}

export default App