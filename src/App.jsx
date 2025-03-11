import { GlobalStyle, AppStyle } from './AppStyle.jsx'
import { useState } from 'react';
import Topo from './Topo.jsx'
import FlashcardList from './Flashcards.jsx'
import Footer from './Footer.jsx'

function App() {
  const [answeredCount, setAnsweredCount] = useState(0);

  const handleAnswer = () => {
    setAnsweredCount((prev) => prev + 1);
  };
  return (
    <>
    <GlobalStyle />
    <AppStyle>
     <div className="app-container">
      <div>
          <Topo />
        </div>

        <div>
          <FlashcardList  onAnswer={handleAnswer} />
        </div>

        <div>
          <Footer answeredCount={answeredCount} />
        </div>
     </div>
    </AppStyle>
    </>
  )
}

export default App
