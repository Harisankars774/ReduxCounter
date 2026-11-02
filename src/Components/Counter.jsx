import React from 'react'

function Counter() {
  return (
    <div style={{height:'100vh',backgroundColor:'black'}} className='container-fluid d-flex justify-content-center align-items-center'>
     
         <div style={{height:'400px'}} className='w-50 border rounded p-5'>
                 <h1 style={{fontSize:'100px'}} className=' text-light text-center'>0</h1>
                 <div className='d-flex justify-content-center align-items-center mt-4'>
                    <button className='btn btn-warning'>Decrement</button>
                    <button className='btn btn-danger mx-5'>Reset</button>
                    <button className='btn btn-success'>Increment</button>
                 </div>
                 <div className='d-flex justify-content-center align-items-center mt-5'>
                     <input type='text' placeholder='Enter amount to be incremented' className='form-control w-50'/>
                     <button className='btn btn-primary mx-4'>Increment by amount</button>
                 </div>
         </div>
    </div>
  )
}

export default Counter