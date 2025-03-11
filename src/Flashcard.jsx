import { useState } from "react";
import FlashcardStyle from "./FlashcardStyle";
import turn from "./assets/seta_virar.png";
import play from "./assets/seta_play.png";
import incorrectIcon from "./assets/icone_erro.png";
import effortIcon from "./assets/icone_quase.png";
import zapIcon from "./assets/icone_certo.png";

import RedButton from "./RedButton";
import YellowButton from "./YellowButton";
import ZapButton from "./ZapButton";

export default function Flashcard({ front, back, number, onAnswer }) {
  const [stage, setStage] = useState("hidden"); 
  const [status, setStatus] = useState(null);
  const [flipped, setFlipped] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleShowQuestion = () => {
    if (!status) {
      setFlipped(!flipped);
      setStage("question");
    }
  };

  const handleFlip = () => {
    setStage("answer");
  };

  const handleAnswer = (choice) => {
    if (!status) {
      setStatus(choice);
      setStage("answered");
      setAnswered(!answered);
      onAnswer();
    }
  };

  const getStatusStyles = () => {
    switch (status) {
      case "incorrect":
        return { textDecoration: "line-through", color: "#f44336" };
      case "effort":
        return { textDecoration: "line-through", color: "#ffc107" };
      case "correct":
        return { textDecoration: "line-through", color: "#4caf50" };
      default:
        return {};
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case "incorrect":
        return <img src={incorrectIcon} alt="Incorreto" className="icon" />;
      case "effort":
        return <img src={effortIcon} alt="Esforço" className="icon" />;
      case "correct":
        return <img src={zapIcon} alt="Zap!" className="icon" />;
      default:
        return null;
    }
  };

  return (
    <FlashcardStyle flipped={flipped} answered={answered}>
      <div className={`flashcard ${flipped ? "flipped" : ""}`}>
        <div className="flashcard-inner">
          {status ? (
            <div className="flashcard" style={getStatusStyles()}>
              <span>Pergunta {number}</span>
              {getStatusIcon()}
            </div>
          ) : stage === "hidden" ? (
            <div className="flashcard" onClick={handleShowQuestion}>
              <div>
                <span>Pergunta {number}</span>
                <button className="play">
                <img src={play} alt="Click to reveal question" className="icon" />
                </button>
              </div>
            </div>
          ) : stage === "question" ? (
            <div className="flashcard-front">
              <p>{front}</p>
              <button className="turn" onClick={handleFlip}>
                <img src={turn} alt="Flip card" />
              </button>
            </div>
          ) : stage === "answer" ? (
            <div className="flashcard-back">
              <p>{back}</p>
              <div className="buttons-container">
                <RedButton onClick={() => handleAnswer("incorrect")} />
                <YellowButton onClick={() => handleAnswer("effort")} />
                <ZapButton onClick={() => handleAnswer("correct")} />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </FlashcardStyle>
  );
}
