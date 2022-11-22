import React, { useState } from 'react'

function App() {
    let [hide,setHide]= useState(true);
  return (
    <div className='m-10'>
        <button className='btn' onClick={()=>setHide(!hide)}>
            {hide ? "Show " : "Hide "}
             Element below
        </button>
        {!hide && <h4>Toggle Challenge</h4>}
    </div>
  )
}

export default App