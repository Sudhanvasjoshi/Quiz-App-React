import React,{useState} from 'react'

export default function Count() {
    const [ran,setRan] = useState("*******")
    const handleRandom = () =>{
        let x = Math.floor(Math.random()*10+1);
        setRan(x)


    }
    return (
    
    <div>
      <div className="container my-3">
        <div className="card  my-3">
            <div className="card-body">
            <h2 className="card-title text-center my-5">Random Number Generator</h2>
           <h3 className="text-center my-5">{ran}</h3>
           <div className="text-center">
            <button className="btn btn-primary"onClick={handleRandom}>Generate</button>
           </div>
            </div>           
        </div>
      </div>
    </div>
  )
}
