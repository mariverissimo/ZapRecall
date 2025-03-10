import styled from "styled-components";

const FlashcardStyle = styled.div`
  .flashcard-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  .flashcard {
    font-family: Recursive;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    perspective: 1000px;
    width: 300px;
    height: 150px;
    position: relative;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flashcard-inner {
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    position: relative;
    transform-origin: center center;
  }

  .flipped .flashcard-inner {
    transform: rotateY(180deg);
  }

  .flashcard-front,
  .flashcard-back {
    position: absolute;
    width: 100%;
    height: 100%; 
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    background-color: white;
    text-align: center;
    box-sizing: border-box;
  }

  .flashcard-back {
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .buttons-container {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
  }

  .icon {
    width: 20px;
    height: 20px;
    margin-left: 8px;
  }
`;

export default FlashcardStyle;
