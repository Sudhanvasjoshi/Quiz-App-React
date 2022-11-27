import React ,{useState ,useContext} from 'react';
import { QuizContext } from '../Helper/Context';
import {Questions} from '../Helper/QuestionBank'
export default function Mainquiz() {
  const [currQuestion,setCurrQuestion] = useState(0);
  const [optionChoosen,setOptionChoosen] = useState("");
  const {score ,setScore, setIsQuizStarted} = useContext(QuizContext);
  const nextQuestion = () =>{
    setCurrQuestion(currQuestion+1);
    if (Questions[currQuestion].answer === optionChoosen){
        setScore(score+1);
    }
   

  };
  const finishQuiz = () =>{
    if (Questions[currQuestion].answer === optionChoosen){
        setScore(score+1);
    }
    setIsQuizStarted("endScreen")

  }
    return (
    <div className="container card my-5">
        <div className="card-title my-2">
            <h2 className="text-center my-3"> Question {currQuestion}</h2>
        </div>
        <div className="card-body text-center"><h4>{Questions[currQuestion].prompt}</h4>
        <button className="btn btn-primary mx-2 " onClick={() =>setOptionChoosen("A")}>{Questions[currQuestion].optionA}</button>
        <button className="btn btn-success mx-2" onClick={() => setOptionChoosen("B")}>{Questions[currQuestion].optionB}</button>
        <button className="btn btn-danger mx-2" onClick={() => setOptionChoosen("C")}>{Questions[currQuestion].optionC}</button>
        <button className="btn btn-dark mx-2" onClick={() => setOptionChoosen("D")}>{Questions[currQuestion].optionD}</button>
        </div>
        {currQuestion === Questions.length-1 ? (
            <button className="btn btn-primary mx-5" onClick={finishQuiz}> Finish Quiz</button>
        ): (<div className="text-center">
        <button className="btn btn-primary my-4" onClick={nextQuestion}>Next Question</button>
    </div>

        )}
        

    </div>
  )
}
