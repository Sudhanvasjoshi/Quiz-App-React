import React,{useState ,useContext} from 'react'
import EndScreem from './EndScreem';
import MainMenu from './MainMenu';
import Mainquiz from './Mainquiz';
import { QuizContext } from '../Helper/Context';
export default function Quiz() {
  const [isQuizStarted, setIsQuizStarted] = useState("menu");
  const [score , setScore] = useState(0);
    return (
    <div>
      <div className="container">
        <QuizContext.Provider value = {{isQuizStarted,setIsQuizStarted ,score,setScore}}>
        {isQuizStarted === "menu" && <MainMenu/>}
        {isQuizStarted === "quiz" && <Mainquiz/>}
        {isQuizStarted === "endScreen" && <EndScreem/>}
        </QuizContext.Provider>

      </div>

    </div>
  )
}
