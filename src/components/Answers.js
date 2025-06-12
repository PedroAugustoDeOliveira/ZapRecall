import "./../style/Answers.css"

function Answer({text, onAnswer}){
    return(
        <div className="answer">
            <h1>{text}</h1>
            <div className="button">
                <button className="no-remember" onClick={() => onAnswer("no-remember")} >no remember</button>
                <button className="almost" onClick={() => onAnswer("almost")}>almost remember</button>
                <button className="zap" onClick={() => onAnswer("zap")}>Zap!</button>
            </div>
        </div>
    )
}

export default function Answers({id, onAnswer}){
    const answers = [
        { id: 1, text: "Uma extensão de linguagem do JavaScript"},
        { id: 2, text: "uma biblioteca JavaScript para construção de interfaces"},
        { id: 3, text: "interagindo com a DOM para colocar componentes React na mesma"},
        { id: 4, text: "gerenciar os pacotes necessários e suas dependências"}
    ]

    console.log('id recebido em Answers:', id, typeof id);

    const answer = answers.find(a => a.id === Number(id))

    if(!answer){
        return <div>resposta não encontrada</div>
    }
    return(
        <div className="answers">
            <Answer text={answer.text} onAnswer={onAnswer}/>
        </div>
    )
}