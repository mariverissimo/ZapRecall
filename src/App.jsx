import { GlobalStyle, AppStyle } from './AppStyle.jsx'
import Topo from './Topo.jsx'
import FlashcardList from './Flashcards.jsx'
import Footer from './Footer.jsx'

function App() {

  return (
    <>
    <GlobalStyle />
    <AppStyle>
     <div className="app-container">
      <div>
          <Topo />
        </div>

        <div>
          <FlashcardList />
        </div>

        <div>
          <Footer />
        </div>
     </div>
    </AppStyle>
    </>
  )
}

export default App
