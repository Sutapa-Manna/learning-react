import React from 'react'

const foodlist = [
    {name:"Pizza", cal:266},
    {name:"Berger", cal:140},
    {name:"Browne", cal:190},
    {name:"Fried rice", cal:125},
    {name:"Lassania", cal:135},
    {name:"Pani Puri", cal:90},
    {name:"Pani Puri", cal:90},
]
function App() {
  return (
   <>
   <div className='text-center p-5 pb-10'>
        <h2 className='font-bold text-3xl uppercase underline'>Instruction</h2>
        <ul className='text-blue-500 mt-10'>
            <li>build a container</li>
            <li>create a seperate function and use it as a component</li>
            <li>pass props "calory and food" and call it to main component</li>
        </ul>
   </div>
   <div className='flex flex-col items-center'>
        <h2 className='font-bold text-4xl text-purple-800 p-5'>Calorie Read only-{foodlist.length}</h2>
        <div className='grid gap-5 border-2 border-black p-5 w-1/2 overflow-y-scroll h-[500px] '>
            {
            foodlist.map((list) => <Foodcart name={list.name} cal={list.cal}/>)
            }
        </div>
   </div>
   
   </>
  )
}

function Foodcart(props){
    return(
        <div className='border-2 border-purple-400 bg-purple-600 text-white p-5 rounded'>
            <h2 className='text-2xl font-bold'>{props.name}-{(props.cal>150)?'Unhealthy':'Normal'}</h2> 
            {/* <!--Conditional rendering--> */}
            <hr/>
            <h5>you have consumed {props.cal} cals today</h5>
        </div>
    )
}

export default App