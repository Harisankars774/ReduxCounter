import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset,incrementByAmount } from '../redux/slices/CounterSlice'

function Counter() {
 const{count} =useSelector(state=>state.counterReducer)
 const dispatch=useDispatch()
 const inputRef=useRef()
 const handleIncrement=()=>
 {
  const amount=inputRef.current.value
  if(amount)
  {
     dispatch(incrementByAmount(+(amount)))
     inputRef.current.value=""
  }
  else
  {
    alert("Please enter a valid input")
  }
 }
  return (
    <div style={{height:'100vh',backgroundColor:'black'}} className='container-fluid d-flex justify-content-center align-items-center'>
     
         <div style={{height:'400px'}} className='w-50 border rounded p-5'>
                 <h1 style={{fontSize:'100px'}} className=' text-light text-center'>{count}</h1>
                 <div className='d-flex justify-content-center align-items-center mt-4'>
                    <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>Decrement</button>
                    <button onClick={()=>dispatch(reset())} className='btn btn-danger mx-5'>Reset</button>
                    <button onClick={()=>dispatch(increment())} className='btn btn-success'>Increment</button>
                 </div>
                 <div className='d-flex justify-content-center align-items-center mt-5'>
                     <input ref={inputRef} type='text' placeholder='Enter amount to be incremented' className='form-control w-50'/>
                     <button onClick={handleIncrement} className='btn btn-primary mx-4'>Increment by amount</button>
                 </div>
         </div>
    </div>
  )
}

export default Counter 