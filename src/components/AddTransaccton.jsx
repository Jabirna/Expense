import React, { useState } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';
const AddTransaccton = () => {
    const [text,settext] = useState('');
    const [amount , setamount]=useState(0);
    
    const {addTransaction} =useContext(GlobalContext);

    const onSubmit = e =>{
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random()*100000000),
        text,
        amount:+amount
      }

      addTransaction(newTransaction);
    }
  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
            <label htmlFor="text">Text</label>
            <input type='text' id='text' value={text} onChange={(e)=> settext(e.target.value)} placeholder='Enter Text...'/>
        </div>
        <div className='form-control'>
            <label htmlFor="amount">
                Amount <br/>
                (negative - expense , positivr - income)
            </label>
            <input type='number' id='amount' value={amount} onChange={(e)=> setamount(e.target.value)} placeholder='Enter amount...'/>
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </>
  )
}

export default AddTransaccton
