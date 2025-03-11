import styled from "styled-components";

const FlashcardStyle = styled.div`
  .flashcard-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px; /* Adds spacing dynamically */
    width: 100vw;
    margin-bottom: 10%;
    overflow-y: scroll;
    max-height: 30%;
  }

  .flashcard {
    font-family: Recursive;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    perspective: 1000px;
    width: 300px;
    height: ${(props) => (props.answered ? "70px" : props.flipped ? "131px" : "70px")};
    position: relative;
    margin-bottom: 8%;
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }

  .flashcard-inner {
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    position: relative;
    transform-origin: center center;
  }



  .flashcard-front,
  .flashcard-back {
    position: absolute;
    width: 100%;
    height: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    background-color: #FFFFD4;
    text-align: center;
    box-sizing: border-box;
  }
  
  .turn{
    position: absolute;
    bottom: 5%;
    right: 5%;
  }

  .play{
    position: absolute;
    bottom: 25%;
    right: 3%;
  }

  .flashcard-back {
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
