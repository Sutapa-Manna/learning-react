import React from 'react'
import "./App.css"

function Container() {
  // const foodlist = ["Pizza", "Berger", "Coke","Browne","Fried Rice","Lassania","Pani Puri"]
  const foodlist = [
    {name:"Pizza",cal:56},
    {name:"Berger",cal:60},
    {name:"Coke",cal:80},
    {name:"Browne",cal:50},
    {name:"French Rice",cal:40}
  ]
  return (
    <>
      <div>
        <h3>Instruction</h3>
        <ul>
          <li>build a container</li>
          <li>create a seperate function and use it as a component</li>
          <li>pass props "calory and food" and call it to main component</li>
        </ul>
      </div>
      <div>
        <h2>Calorie Read Only</h2>
        <div id="foods">
          {
            foodlist.map((food) => <FoodCart title={food.name} cal={food.cal}/> )
          }
        </div>
      </div>
    </>
  )
}
function FoodCart(props){
  return(
    <div className='foodcard'>
      <h3>{props.title}</h3>
      <hr/>
      <h5>you have consumed {props.cal} cals today</h5>
    </div>
  )
}

// function Foodname(value){
//   return value;
// }

export default Container