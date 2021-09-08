import { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.scss';
import Card from "./components/card";
import words from "./words.json";
import Speaker from "./components/Speaker"

function App() {
  let [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    setWordIndex(+localStorage.getItem("wordIndex")! || 0);
  }, []);
  const speaker = new Speaker();
  const play =  () => speaker.play(words[wordIndex].front);
  const handleWordIndex = (isInc: boolean) => {
    if (isInc)
      setWordIndex((wordIndex+1) % words.length);
    else
      setWordIndex(wordIndex > 0 ? wordIndex - 1 : words.length - 1);
    localStorage.setItem("wordIndex", wordIndex.toString());
    document.getElementById("inner")!.classList.remove("flippedCard");
  }
  return (
    <div className="App">
      <Card front={words[wordIndex].front} back={words[wordIndex].back}/>
      <div style={{
        display: "flex",
        justifyContent: "center"
      }}>
        <button className='new-word-btn' onClick={handleWordIndex.bind(null, false)}>
          Previous Word
        </button>
        <button className="new-word-btn" onClick={handleWordIndex.bind(null, false)}>New Word</button>
        <button onClick={play}>
          Play
        </button>
      </div>
    </div>
  );
}

export default App;
