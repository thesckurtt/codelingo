import React, { useContext, useEffect, useState, useRef } from "react";
import ProgressBarApp from "./ProgressBarApp";
import TextContentMainDashboardApp from "./TextContentMainDashboardApp";
import AnswersContentMainDashboardApp from "./AnswersContentMainDashboardApp";
import FooterMainDashboardApp from "./FooterMainDashboardApp";
import { GlobalAppContext, GlobalAppProvider } from "../../contexts/GlobalContextApp";
import { confetti } from "@tsparticles/confetti";

const ModuleApp = ({
  module,
  initModule,
  setAppModules,
  appModules,
  moduleNow,
  setModuleNow,
  buttons,
  setButtons,
  defaultModules,
}) => {
  const [statusFooter, setStatusFooter] = useState("default"); // Footer do Main App [default - correct - incorrect]
  const [valueNowProgressBar, setValueNowProgressBar] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(0);
  const [moduleQuestions, setModuleQuestions] = useState(module.questions);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [isModuleEnd, setIsModuleEnd] = useState(false);
  const [blockNextQuestion, setBlockNextQuestion] = useState(true)
  const { correctQuestion, handleCorrectAnswer, wrongQuestion, verifyTotalQuestions, handleWrongAnswer } = useContext(GlobalAppContext)
  const mySectionRef = useRef(null);

  function resetModuleQuestions() {

  }

  function resetAllStatesOfModule() {
    setStatusFooter("default");
    setValueNowProgressBar(0);
    setSelectedAnswer(0);
    setCurrentQuestion(1);
    setIsModuleEnd(false);
    setModuleQuestions(defaultModules[moduleNow - 1].questions)
    setAppModules(defaultModules)
    console.log(defaultModules[moduleNow - 1].questions)
    console.log(appModules)
  }

  useEffect(() => {
    resetAllStatesOfModule()
  }, [buttons])

  // console.log(module.questions);

  // useEffect(()=>{
  //   // setCurrentQuestion(currentQuestion)
  //   console.log(currentQuestion)

  // }, [currentQuestion])
  const isIntro = module.initial_view;

  // Função para verificar as perguntas
  function answerHandleClick(
    e,
    correctAnswer,
    answerOption,
    questionsLenght,
    questionId
  ) {
    document.querySelectorAll(".li-answer.active").forEach((el) => {
      el.classList.remove("active");
    });

    e.currentTarget.classList.add("active");

    setValueNowProgressBar((questionId / questionsLenght) * 100);

    setSelectedAnswer(answerOption);

    setBlockNextQuestion(false)

    if (answerOption === correctAnswer) {
      setStatusFooter("correct");
      handleCorrectAnswer()
      verifyTotalQuestions()
    } else {
      setStatusFooter("incorrect");
      handleWrongAnswer()
      verifyTotalQuestions()
    }
  }

  // Função para avançar para a próxima pergunta
  // console.log(moduleQuestions.length)
  function nextQuestion() {
    const updated = moduleQuestions.map((question) => {
      if (question.visibility == true) {
        question.visibility = false;
      }
      if (question.id == currentQuestion + 1) {
        question.visibility = true;
      }
      return question;
    });
    // console.log(moduleQuestions.length) -- BUG
    if (currentQuestion < moduleQuestions.length - 1) {
      // console.log(currentQuestion);
      setCurrentQuestion(currentQuestion + 1);
    }

    if (currentQuestion == moduleQuestions.length - 1) {
      setIsModuleEnd(true);
      // alert("Fim do módulo");
    }
    setModuleQuestions([...updated]);
    setStatusFooter("default");
  }

  return (
    <main className="flex-grow-1 main-dashboard-app d-flex flex-column">
      <section ref={mySectionRef} className="content-main-dashboard-app d-flex flex-column align-items-center flex-grow-1 w-100 p-5">
        {isIntro && (
          <>
            <TextContentMainDashboardApp
              title={module.title}
              text={module.text}
            />
          </>
        )}
        {!isIntro && (
          <>
            <ProgressBarApp valueNowProgressBar={valueNowProgressBar} />
            {moduleQuestions
              .filter((q) => q.visibility == true)
              .map((question) => {
                return (
                  <React.Fragment key={question.id}>
                    <TextContentMainDashboardApp
                      title={question.title}
                      text={question.text}
                    />
                    <AnswersContentMainDashboardApp
                      setSelectedAnswer={setSelectedAnswer}
                      questionsLenght={module.questions.length}
                      questionId={question.id}
                      answers={question.answers}
                      correctAnswer={question.correct_answer}
                      handleClick={answerHandleClick}
                    />
                  </React.Fragment>
                );
              })}
          </>
        )}
      </section>
      <FooterMainDashboardApp
        setBlockNextQuestion={setBlockNextQuestion}
        blockNextQuestion={isIntro ? false : blockNextQuestion}
        appModulesLength={appModules.length}
        moduleNow={moduleNow}
        setModuleNow={setModuleNow}
        moduleId={module.id}
        isIntro={isIntro}
        {...(isIntro
          ? { handleClick: initModule }
          : { handleClick: nextQuestion })}
        isModuleEnd={isModuleEnd}
        statusFooter={statusFooter}
        btnLabel={isIntro ? "Iniciar" : "Próxima"}
      />
    </main>
  );

  // return (
  //   <main className="flex-grow-1 main-dashboard-app d-flex flex-column">
  //     <section className="content-main-dashboard-app d-flex flex-column align-items-center flex-grow-1 w-100 p-5">
  //       <ProgressBarApp valueNowProgressBar={valueNowProgressBar} />
  //       <TextContentMainDashboardApp
  //         title={"Lorem ipsum"}
  //         text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
  //           erat arcu, blandit a augue in, tincidunt euismod mi. Fusce a leo ut
  //           lectus fermentum rutrum eu ac eros. Sed accumsan pretium velit a
  //           vulputate.`}
  //       />
  //       <AnswersContentMainDashboardApp handleClick={answerHandleClick} />
  //     </section>
  //     <FooterMainDashboardApp
  //       statusFooter={statusFooter}
  //       btnLabel={true ? "Iniciar" : "Verificar"}
  //     />
  //   </main>
  // );
};

export default ModuleApp;
