import styled from "styled-components";

const FlashcardStyle = styled.div`
.flashcard {
  width: 200px;
  height: 150px;
  perspective: 1000px; /* Adds depth for 3D effect */
  cursor: pointer;
}

.flashcard-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.flashcard.flipped .flashcard-inner {
  transform: rotateY(180deg);
}

.flashcard-front,
.flashcard-back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: white;
  padding: 10px;
}

.flashcard-back {
  transform: rotateY(180deg);
  background-color: #f8f9fa;
}

`

export default FlashcardStyle