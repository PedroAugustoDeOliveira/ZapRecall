import logo from './logo.svg';
import Welcome from "./components/Welcome";
import  Flashcards from "./components/FlashCards";
import "./../src/style/App.css";
import "./../src/style/Reset.css"
import React from 'react';

function App() {

  const [start, setStart] = React.useState(false) 
  return (
    <div className="App">
       {start ? <Flashcards /> : <Welcome aoIniciar={() => setStart(true)} />}
    </div>
  );
}

export default App;
