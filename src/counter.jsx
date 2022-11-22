import {useState} from 'react'

function Add() {
  return (
    <div className='flex flex-col items-center'>
        <h4>There are 4 counter component instances that each manage their own state.</h4>
        <div className='grid justify-center border-2 border-black w-[300px] h-[500px] overflow-scroll m-10'>
            <AddSub/>
            <AddSub/>
            <AddSub/>
            <AddSub/>
            <AddSub/>
        </div>
    </div>
  )
}
function AddSub(){
    let [count,setCount]=useState(0);
    return(
        <div className='card shadow-xl'>
            <h1 className='card-title'>Hello -{count}</h1>
            <div className='flex justify-between card-body' >
                <button className='btn btn-outline btn-primary' onClick={() => setCount(count+1)}>Add</button>
                <button className='btn btn-outline btn-primary' onClick={() => {
                    if(count>0){
                        setCount(count-1);
                    }
                }
                }>Decrease</button>
            </div>
        </div>
    )
}

export default Add