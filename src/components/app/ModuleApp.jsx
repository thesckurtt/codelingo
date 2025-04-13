import React, { useState } from "react";
import ProgressBarApp from "./ProgressBarApp";
import TextContentMainDashboardApp from "./TextContentMainDashboardApp";
import AnswersContentMainDashboardApp from "./AnswersContentMainDashboardApp";
import FooterMainDashboardApp from "./FooterMainDashboardApp";

const ModuleApp = ({ module, initModule, setAppModules, appModules }) => {
  const [statusFooter, setStatusFooter] = useState("default"); // Footer do Main App [default - correct - incorrect]
  const [valueNowProgressBar, setValueNowProgressBar] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(0);
  const [moduleQuestions, setModuleQuestions] = useState(module.questions)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // console.log(module.questions);

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

    if (answerOption === correctAnswer) {
      setStatusFooter("correct");
    } else {
      setStatusFooter("incorrect");
    }
  }

  // Função para avançar para a próxima pergunta
  function nextQuestion() {
    // console.log(selectedAnswer)
    const updated = moduleQuestions.map((question, index) => {
      if(question.visibility == true){
        question.visibility = false
        console.log(question.title)
      }
      if(question.id == (currentQuestion + 2)){
        question.visibility = true
      }
      // console.log(question.title, `  --  ${index}`)
      return question;
    })
    // alert("avançar pergunta");
    console.log(updated)
    setStatusFooter('default')
  }

  return (
    <main className="flex-grow-1 main-dashboard-app d-flex flex-column">
      <section className="content-main-dashboard-app d-flex flex-column align-items-center flex-grow-1 w-100 p-5">
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
        moduleId={module.id}
        isIntro={isIntro}
        {...(isIntro
          ? { handleClick: initModule }
          : { handleClick: nextQuestion })}
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
