import './AppStyle.jsx'
import Topo from './Topo.jsx'
import FlashcardList from './Flashcards.jsx'
import Footer from './Footer.jsx'

function App() {

  return (
    <>
      <div>
        <Topo />
      </div>

      <div>
        <FlashcardList />
      </div>

      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
