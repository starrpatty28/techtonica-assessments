import React from "react"

function App() {
  const tossCoin = () => {
    alert("The coin was tossed")
  }

  return (
    <div>
      The coin toss app will go here!
      <button onClick={tossCoin}>Toss coin</button>
    </div>
  )
}

export default App    