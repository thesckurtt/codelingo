import React, { useEffect, useState } from "react";
import ProgressBarApp from "./ProgressBarApp";
import TextContentMainDashboardApp from "./TextContentMainDashboardApp";
import AnswersContentMainDashboardApp from "./AnswersContentMainDashboardApp";
import FooterMainDashboardApp from "./FooterMainDashboardApp";

const modules = [
  {
    id: 1,
    name: "introducao",
    visibility: true,
    title: "Introdução ao JavaScript",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat arcu, blandit a augue in, tincidunt euismod mi. Fusce a leo ut lectus fermentum rutrum eu ac eros. Sed accumsan pretium velit a vulputate.",
    initial_view: true,
    questions: [
      {
        id: 1,
        visibility: true,
        title: "01 - Lorem Ipsum Dolor",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat arcu, blandit a augue in, tincidunt euismod mi. ",
        answers: [
          { option: 1, text: "Lorem Ipsum sit amet" },
          { option: 2, text: "Lorem Ipsum sit amet" },
          { option: 3, text: "Lorem Ipsum sit amet" },
          { option: 4, text: "Lorem Ipsum sit amet" },
        ],
        correct_answer: 2,
      },
      {
        id: 2,
        visibility: false,
        title: "02 - Dolor Sit Amet",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat arcu, blandit a augue in, tincidunt euismod mi. ",
        answers: [
          { option: 1, text: "Ipsum sit Lorem amet" },
          { option: 2, text: "Ipsum sit Lorem amet" },
          { option: 3, text: "Ipsum sit Lorem amet" },
          { option: 4, text: "Ipsum sit Lorem amet" },
        ],
        correct_answer: 4,
      },
    ],
  },
  {
    id: 2,
    name: "modulo_01",
    visibility: false,
    title: "Módulo 1 - Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat arcu, blandit a augue in, tincidunt euismod mi. Fusce a leo ut lectus fermentum rutrum eu ac eros. Sed accumsan pretium velit a vulputate.",
    initial_view: true,
    questions: [
      {
        id: 1,
        visibility: true,
        title: "Lorem Ipsum Dolor",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat arcu, blandit a augue in, tincidunt euismod mi. ",
        answers: [
          { option: 1, text: "Lorem Ipsum sit amet" },
          { option: 2, text: "Lorem Ipsum sit amet" },
          { option: 3, text: "Lorem Ipsum sit amet" },
          { option: 4, text: "Lorem Ipsum sit amet" },
        ],
        correct_answer: 2,
      },
      {
        id: 2,
        visibility: false,
        title: "Dolor Sit Amet",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat arcu, blandit a augue in, tincidunt euismod mi. ",
        answers: [
          { option: 1, text: "Ipsum sit Lorem amet" },
          { option: 2, text: "Ipsum sit Lorem amet" },
          { option: 3, text: "Ipsum sit Lorem amet" },
          { option: 4, text: "Ipsum sit Lorem amet" },
        ],
        correct_answer: 4,
      },
    ],
  },
];

const MainDashboardApp = () => {
  const [appModules, setAppModules] = useState(modules);
  const [valueNowProgressBar, setValueNowProgressBar] = useState(0);
  const [statusFooter, setStatusFooter] = useState("default"); // default - correct - incorrect
  const [moduleNow, setModuleNow] = useState(modules.introducao);

  useEffect(() => {
    setAppModules(appModules);
    setValueNowProgressBar(valueNowProgressBar);
    setStatusFooter(statusFooter);
  }, [valueNowProgressBar, statusFooter, appModules]);

  function answerHandleClick(e) {
    setValueNowProgressBar(valueNowProgressBar + 20);
    setStatusFooter("correct");
    console.log(e.target.getAttribute("data-question-option"));
  }

  function toggleInitialView(e, id) {
    console.log(e, id);
  }

  return (
    <main className="flex-grow-1 main-dashboard-app d-flex flex-column">
      {appModules.map((module) => {
        {
          /* console.log(module.visibility); */
        }
        if (module.visibility) {
          return (
            <React.Fragment key={module.name}>
              <section className="content-main-dashboard-app d-flex flex-column align-items-center flex-grow-1 w-100 p-5">
                {module.initial_view ? (
                  ""
                ) : (
                  <ProgressBarApp valueNowProgressBar={valueNowProgressBar} />
                )}
                {/* initial_view == true ? mostra a introdução do módulo : mostra o conteudo da pergunta visivel */}
                {module.initial_view ? (
                  <TextContentMainDashboardApp
                    title={module.title}
                    text={module.text}
                  />
                ) : (
                  module.questions.map((question) => {
                    if (question.visibility) {
                      return (
                        <TextContentMainDashboardApp key={question.id}
                          title={question.title}
                          text={question.text}
                        />
                      );
                    } else {
                      return;
                    }
                  })
                )}

                {module.initial_view ? (
                  ""
                ) : (
                  <>
                    <AnswersContentMainDashboardApp
                      handleClick={answerHandleClick}
                    />
                  </>
                )}
              </section>
              {/* Renderiza o primeiro componente se estiver na explicação do módulo */}
              {module.initial_view ? (
                <FooterMainDashboardApp
                  statusFooter={statusFooter}
                  btnLabel={"Iniciar"}
                  handleClick={toggleInitialView}
                  id={module.id}
                />
              ) : (
                <FooterMainDashboardApp
                  statusFooter={statusFooter}
                  btnLabel={"Verificar"}
                />
              )}
            </React.Fragment>
          );
        }
      })}
    </main>
  );
};

export default MainDashboardApp;

/* <section className="content-main-dashboard-app d-flex flex-column align-items-center flex-grow-1 w-100 p-5">
        <ProgressBarApp valueNowProgressBar={valueNowProgressBar} />
        <TextContentMainDashboardApp
          title={"Lorem ipsum"}
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            erat arcu, blandit a augue in, tincidunt euismod mi. Fusce a leo ut
            lectus fermentum rutrum eu ac eros. Sed accumsan pretium velit a
            vulputate.`}
        />
        <AnswersContentMainDashboardApp handleClick={answerHandleClick} />
      </section>
      <FooterMainDashboardApp statusFooter={statusFooter} /> */
