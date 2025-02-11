import React from 'react'
import { useState } from 'react'
import { store } from './store'
import { INC_COUNT,DEC_COUNT } from './action'


export const Counter = () => {
    const [count, setCount] = useState(store.getState().count)
  console.log(store.getState().count)
 
  //subscribe it to get updates of your state
  store.subscribe(()=>{
    setCount (store.getState().count)
     console.log(store.getState())
 })
 console.log("counter component")
  return (
    <div className='app-container'>
        <h1>Count :{store.getState().count}</h1>
        <button onClick={()=>store.dispatch({type:INC_COUNT})}>Inc</button>
        <button onClick={()=>store.dispatch({type:DEC_COUNT})}>Dec</button>
    </div>


  
  )
}
