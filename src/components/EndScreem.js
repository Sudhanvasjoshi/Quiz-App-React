import React,{useContext} from 'react';
import { QuizContext } from '../Helper/Context';
import { Questions } from '../Helper/QuestionBank';
export default function EndScreem() {
  const { score,setScore,setIsQuizStarted } = useContext(QuizContext);
  const restartQuiz = () =>{
    setScore(0);
    setIsQuizStarted("menu")

  }
    return (
    <div className="container card my-5">
        <div className="card-title my-5">
        <h2 className="text-center">
            RESULT
        </h2>
        </div>
        <div className="card-body my-3 text-center">
            <h3 className="text-center">{score} / {Questions.length} </h3>
        <button className="btn btn-danger         my-3 mx-5">Print Result</button>
        <button className="btn btn-primary mx-4" onClick={restartQuiz}>Restart Quiz</button>
        </div>

       
    </div>
  )
}
