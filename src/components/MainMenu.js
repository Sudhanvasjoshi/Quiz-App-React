import React,{useContext} from 'react';
import { QuizContext } from '../Helper/Context';
export default function MainMenu() {
    const {isQuizStarted,setIsQuizStarted} = useContext(QuizContext);
    return (
   
    <div className="Menu container my-5">
        <div className="card text-bg-primary my-5">
            <div className="card-title my-3">
                <h2 className ="text-center my-2">Quiz Time</h2>
            </div>
            <div className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium cumque natus alias? Fugit esse molestiae corrupti odit cupiditate labore fuga, nihil, fugiat in adipisci at nemo praesentium magni facilis voluptates.</div>
        <button className="btn btn-success my-5 mx-5" onClick={() => {
        setIsQuizStarted("quiz")
      }}>Start Quiz</button>
        </div>
     
    </div>
  )
}
