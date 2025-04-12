import React, { useState } from "react";
import ProgressBarApp from "./ProgressBarApp";
import TextContentMainDashboardApp from "./TextContentMainDashboardApp";
import AnswersContentMainDashboardApp from "./AnswersContentMainDashboardApp";
import FooterMainDashboardApp from "./FooterMainDashboardApp";

const ModuleApp = ({ module, initModule }) => {
  const [statusFooter, setStatusFooter] = useState("default"); // Footer do Main App [default - correct - incorrect]
  const [valueNowProgressBar, setValueNowProgressBar] = useState(0);

  const isIntro = module.initial_view;

  function answerHandleClick(e, correctAnswer, answerOption) {
    document.querySelectorAll(".li-answer.active").forEach((el) => {
      el.classList.remove("active");
    });

    e.currentTarget.classList.add("active");

    answerOption === correctAnswer
      ? setStatusFooter("correct")
      : setStatusFooter("incorrect");
  } // Função para verificar as perguntas

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
            {module.questions
              .filter((q) => q.visibility == true)
              .map((question) => {
                return (
                  <React.Fragment key={question.id}>
                    <TextContentMainDashboardApp
                      title={question.title}
                      text={question.text}
                    />
                    <AnswersContentMainDashboardApp
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
        {...(isIntro ? { handleClick: initModule } : {})}
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
