import Flashcard from "./Flashcard";
const flashcards = [
    { id: 1, front: "O que é JSX?", back: "Uma extensão de linguagem do JavaScript" },
    { id: 2, front: "O React é __", back: "Uma biblioteca JavaScript para construção de interfaces" },
    { id: 3, front: "Componentes devem iniciar com __", back: "Letra maiúscula" },
    { id: 4, front: "Podemos colocar __ dentro do JSX", back: "Expressões" },
    { id: 5, front: "O ReactDOM nos ajuda __", back: "Interagindo com a DOM para colocar componentes React na mesma" },
    { id: 6, front: "Usamos o npm para __", back: "Gerenciar os pacotes necessários e suas dependências" },
    { id: 7, front: "Usamos props para __", back: "Passar diferentes informações para componentes" },
    { id: 8, front: "Usamos estado (state) para __", back: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" },
  ];
  const FlashcardList = () => {
    return (
        <div className="flashcard-container">
          {flashcards.map((card, index) => (
            <Flashcard key={card.id} number={index + 1} front={card.front} back={card.back} />
          ))}
        </div>
    );
  };

export default FlashcardList;