import { useState, useEffect } from 'react';
import '../styles/App.scss';
import "../styles/allwords.scss";
import Card from "./card";
import words from "../words.json";
import Speaker from "./Speaker";
import ProgressBar from "react-bootstrap/ProgressBar";

function AllWords() {
  let [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    setWordIndex(+localStorage.getItem("wordIndex")! || 0);
  }, []);
  const speaker = new Speaker();
  const handleWordIndex = (isInc: boolean) => {
    if (isInc)
      setWordIndex((wordIndex+1) % words.length);
    else
      setWordIndex(wordIndex > 0 ? wordIndex - 1 : words.length - 1);
    localStorage.setItem("wordIndex", wordIndex.toString());
    document.getElementById("inner")!.classList.remove("flippedCard");
  }
  return (
    <div className="all-words">
      <Card front={words[wordIndex].front} back={words[wordIndex].back} speaker={speaker}/>
      <div style={{
        display: "flex",
        justifyContent: "center"
      }}>
        <button className='new-word-btn button-left' onClick={handleWordIndex.bind(null, false)}>
          Previous Word
        </button>
        <button className="new-word-btn button-right" onClick={handleWordIndex.bind(null, true)}>New Word</button>
      </div>
      {/* <img src="https://www.i2clipart.com/cliparts/0/6/0/9/clipart-vase-of-flowers-256x256-0609.png" alt="vase" className="vase" /> */}
      <br/>
      <br/>
      <ProgressBar now={(wordIndex/words.length) * 100} label={`${wordIndex}/${words.length}`}/>
    </div>
  );
}

export default AllWords;
