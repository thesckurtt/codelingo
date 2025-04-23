import { createContext, useContext, useEffect, useState } from "react";

export const GlobalAppContext = createContext();

export const GlobalAppProvider = ({ children }) => {
  const [correctQuestion, setCorrectQuestion] = useState(0);
  const [wrongQuestion, setWrongQuestion] = useState(0);

  function verifyTotalQuestions() {
    console.log('questao correta: ', correctQuestion)
    console.log('questao errada: ', wrongQuestion)
  }
  
  function handleCorrectAnswer() {
    setCorrectQuestion((correctQuestion) => correctQuestion + 1)
  }

  function handleWrongAnswer() {
    setWrongQuestion((wrongQuestion) => wrongQuestion + 1)
  }

  return (
    <GlobalAppContext.Provider value={{ correctQuestion, handleCorrectAnswer, verifyTotalQuestions, wrongQuestion, handleWrongAnswer }}>
      {children}
    </GlobalAppContext.Provider>
  )
}

export const useGlobalApp = () => useContext(GlobalAppContext)

// export const useAuth = () => useContext(AuthContext);