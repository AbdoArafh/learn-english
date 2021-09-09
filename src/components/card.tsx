import {FC} from 'react';
import Sound from "./sound";

interface props {
    front: string,
    back: string,
    speaker: Object
}

const Card: FC<props> = ({front, back, speaker}) => {
    // let angle = 0;
    return (
      <div className="card">
        <div className="inner" id="inner" onClick={(e) => {
          e.preventDefault();
        //   angle += 180;
        //   document.getElementById("inner")!.style.transform = "rotateY(" + angle + "deg)";
        const element = e.target as HTMLElement;
          if (element.classList[0] !== "sound-icon" && element.classList[0] !== "sound")
            document.getElementById("inner")!.classList.toggle("flippedCard");
        }}>
          <div className="front">{front}<Sound speaker={speaker} front={front}/></div>
          <div className="back">{back}</div>
        </div>
      </div>
    )
  }

  export default Card;