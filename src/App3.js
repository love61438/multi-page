import React, { useState } from 'react'

const App = () => {
  const [myname, setMyName] = useState("")
  const [inc_val, setValue] = useState(10)
  return (
    <>
      <button onClick={() => { setMyName("Good Bye 2020!") }}>Change My Name</button><br />
      {(inc_val == 0) ? "Happy New Year 2021!" : myname}<br />
      <button onClick={() => {
        if (inc_val > 0) {
          setValue(inc_val - 1)
          // if (inc_val == 0)
          //   setMyName("Happy New Year!")
        }
      }}>倒數:{inc_val}</button>
    </>
  )
}

export default App /*直接匯出純值或表達式結果*/