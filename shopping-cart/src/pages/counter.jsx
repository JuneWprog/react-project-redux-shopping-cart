import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../store/slices/counter-slice'
import {useState, useRef} from 'react'

const Counter = () => {
    const [amount, setAmount] = useState(0) 
    const dispatch = useDispatch()
    //get counter value from the store
    const counterValue = useSelector((state) => state.counter.value);



    // const {counter} = useSelector((state) => state.counter.value)
    const incrementCounter = () => {
        dispatch(increment())
    }
    const decrementCounter = () => {
        dispatch(decrement())
    }
    const incrementByAmountCounter = (amount) => {
        dispatch(incrementByAmount(amount))
    }
    const inputRef = useRef()

    const handleClick = () => {
        incrementByAmountCounter(parseInt(amount));
        inputRef.current.value ="";
        setAmount(0);
    }

    // 3 functions to handle the increment, decrement and increment by amount
    // 3 buttons with onClick events to call the functions
  return (
    <div className="flex flex-col items-center">
        <p>Value: {counterValue}</p>
        <button onClick ={incrementCounter}>+1</button>
        <button onClick ={decrementCounter}>-1</button>
        <input type="number" ref={inputRef} onChange={(e)=>setAmount(e.target.value)}/>
        <button onClick ={handleClick}>Increment by amount</button>

    </div>
  )
}

export default Counter
