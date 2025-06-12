import "./../style/FlashCards.css"
import "./../style/Reset.css"
import LogoPequeno from "./../assets/logo-pequeno.png"
import Questions from "./Questions.js"
import React from "react"




function Cards({ id, text, isOpen, setIsOpen, onAnswer, answerStatus }) {

    const open = id === isOpen;


    const handleClick = () => {
        if (!open) {
            setIsOpen(id)
        }
    }


    return (
        <div className={`card ${answerStatus || ""}`} onClick={handleClick}>
            {open ? (
                <>
                    <Questions id={id} onAnswer={(status) => onAnswer(id, status)} />
                </>
            ) : (
                <>
                    <p>{text}</p>
                    <ion-icon name="play-outline"></ion-icon>
                </>
            )}
        </div>
    )
}

export default function Flashcards() {
    const questions = [
        { id: 1, text: "question 1" },
        { id: 2, text: "question 2" },
        { id: 3, text: "question 3" },
        { id: 4, text: "question 4" }
    ]

    const [isOpen, setIsOpen] = React.useState(null);

    const [answerStatus, setAnswerStatus] = React.useState({})

    function handleAnswer(id, status){
        setAnswerStatus(prev => ({...prev, [id]: status}))
        setIsOpen(null)
    }


    return (
        <div className="Flashcards">
            <div className="Title">
                <img src={LogoPequeno} alt="logo pequeno" />
                <h1>ZapRecall</h1>
            </div>

            <section className="container">
                {
                    questions.map((n) => <Cards
                        key={n.id}
                        id={n.id}
                        text={n.text}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        answerStatus={answerStatus[n.id]}
                        onAnswer={handleAnswer}
                    />)
                }
            </section>

            <footer className="footer">
                <h2>{Object.keys(answerStatus).length}/4 Concluídos</h2>
            </footer>
        </div>
    )
}