import {useState} from 'react'

function App() {
  let [Day,setday]=useState(true);
  return (
    <div className='text-center'>
      <button className='border-2 border-black m-2' onClick={()=>setday(!Day)}>
        {!Day ? 'Night':'Day'}
        </button>
      <div className={Day ? 'bg-red-800' : 'bg-green-500'}>jhjk</div>
    </div>
  )
}

export default App