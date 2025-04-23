import { createContext, useState } from "react";

export const GlobalAppContext = createContext();

export const GlobalAppProvider = ({ children }) => {
  const [correctQuestion, setCorrectQuestion] = useState(0);
  const [wrongQuestion, setWrongQuestion] = useState(0);

  function handleCorrectAnswer() {
    setCorrectQuestion((correctQuestion) => correctQuestion + 1)
    console.log(correctQuestion)
  }

  function handleWrongAnswer() {
    setWrongQuestion((wrongQuestion) => wrongQuestion + 1)
    console.log(wrongQuestion)
  }

  return (
    <GlobalAppContext.Provider value={{ correctQuestion, handleCorrectAnswer, wrongQuestion, handleWrongAnswer }}>
      {children}
    </GlobalAppContext.Provider>
  )
}