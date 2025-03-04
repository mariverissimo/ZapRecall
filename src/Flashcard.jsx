import { useState } from "react";
import turn from "./assets/seta_virar.png"
import play from "./assets/seta_play.png"

export default function Flashcard({ front, back }) {
  const [stage, setStage] = useState("hidden");
  const [isFlipped, setIsFlipped] = useState(false);

  const handleShowQuestion = () => {
    setStage("question");
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setStage("answer");
  };

  return (
    <div className={`flashcard ${isFlipped ? "flipped" : ""}`}>
      <div className="flashcard-inner">
        <div className="flashcard-front" onClick={stage === "hidden" ? handleShowQuestion : undefined}>
          {stage === "hidden" ? (
            <div>
            <span>Pergunta</span>
            <img src={play} alt="Click to reveal question" className="icon" />
            </div>
          ) : (
            <p>{front}</p>
          )}
          {stage === "question" && <button onClick={handleFlip}><img src={turn}/></button>}
        </div>
        <div className="flashcard-back">
          <p>{back}</p>
        </div>
      </div>
    </div>
  );
}
