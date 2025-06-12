import Logo from "./../assets/logo.png"
import "./../style/Welcome.css"


export default function Welcome({aoIniciar}){
    return(
        <div className="welcome">
            <div className="content">
                <img src={Logo} alt="logo"/>
                <h1>ZapRecall</h1>
                <button onClick={aoIniciar}>Start Recall!</button>
            </div>
        </div>
    )
}
