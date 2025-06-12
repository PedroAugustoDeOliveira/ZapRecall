
import Setinha from "./../assets/setinha.png"
import "./../style/Question.css"
import Answers from "./Answers"
import React from "react"


function Question({ id, text, onAnswer }) {

    const [showAnswer, setShowAnswer] = React.useState(false)

    function handleAnswer() {
        setShowAnswer(true)
    }



    return (
        <div className="question">
            {showAnswer ? (
                <Answers id={id} onAnswer={onAnswer}/>
            ) : (
                <>
                    <h1>{text}</h1>
                    <img src={Setinha} alt="setinha" onClick={handleAnswer}/>
                </>
            )}
        </div>
    )
}

export default function Questions({ id, onAnswer }) {

    const questions = [
        { id: 1, text: "O que é JSX" },
        { id: 2, text: "O que é o React" },
        { id: 3, text: "O ReactDom nos ajuda __" },
        { id: 4, text: "Usamos npm para __" }
    ]

    const question = questions.find(q => q.id === id)

    if (!question) {
        return <div>resposta não encontrada</div>
    }

    return (
        <div className="question-content">
            <Question id={question.id} text={question.text} onAnswer={onAnswer} />
        </div>
    )
}