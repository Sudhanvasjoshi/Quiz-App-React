import React, {useState} from 'react'

export default function Counterr() {
  const [Count , setCount] = useState(0)
  const handleIncrerment = () =>{
    setCount(Count+1)
  }
  const handleDecrement = () =>{
    setCount(Count-1)
  }
  const handleReset = () =>{
    setCount(0)
  }
    return (
    <div>
      <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>
            Counter
          </h1>
          <div className="my-5">
            <h2 className = "my-5">{Count}</h2>
            <button className = "btn btn-primary mx-3"onClick={handleIncrerment}>Increment</button>
            <button className="btn btn-success mx-3 "onClick={handleDecrement}>decrement</button>
            <button className="btn btn-primary"onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
