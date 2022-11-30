import {useState} from 'react'

// STATE AND CONDITIOANAL RENDERING

function App() {
  let [textColour,setTextColour]=useState();
  return (
    <div>
      <label htmlFor="">username</label>
      <input type="text" name="name" className="input input-bordered" onChange={(e)=>setTextColour(e.target.value)}/>
      <div className={
        (textColour == 'Day') ? 'bg-yellow-700 h-64 w-64 m-2' : (textColour == 'Night') ? 'bg-black h-64 w-64 m-2' : 'bg-green-800 h-64 w-64 m-2' }></div>
    </div>
  )
}

export default App