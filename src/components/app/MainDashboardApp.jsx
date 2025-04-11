import { useState } from "react";
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

const MainDashboardApp = ({ moduleNow }) => {
  const [appModules] = useState(modules); // Módulos do App
  const [valueNowProgressBar, setValueNowProgressBar] = useState(0); // Barra de progresso das perguntas
  const [statusFooter, setStatusFooter] = useState("default"); // Footer do Main App [default - correct - incorrect]

  const answerHandleClick = (e) => {
    setValueNowProgressBar((prev) => prev + 20);
    setStatusFooter("correct");
    console.log(e.target.getAttribute("data-question-option"));
  };

  const toggleInitialView = (e, id) => {
    console.log(e, id);
  };

  return (
    <main className="flex-grow-1 main-dashboard-app d-flex flex-column">
      {appModules.map((module) => {
        if (!module.visibility) return null;

        const isIntro = module.initial_view;

        return (
          <React.Fragment key={module.name}>
            <section className="content-main-dashboard-app d-flex flex-column align-items-center flex-grow-1 w-100 p-5">
              {!isIntro && (
                <ProgressBarApp valueNowProgressBar={valueNowProgressBar} />
              )}

              {isIntro ? (
                <TextContentMainDashboardApp
                  title={module.title}
                  text={module.text}
                />
              ) : (
                module.questions.map((question) =>
                  question.visibility ? (
                    <TextContentMainDashboardApp
                      key={question.id}
                      title={question.title}
                      text={question.text}
                    />
                  ) : null
                )
              )}

              {!isIntro && (
                <AnswersContentMainDashboardApp
                  handleClick={answerHandleClick}
                />
              )}
            </section>

            <FooterMainDashboardApp
              statusFooter={statusFooter}
              btnLabel={isIntro ? "Iniciar" : "Verificar"}
              handleClick={isIntro ? toggleInitialView : undefined}
              id={isIntro ? module.id : undefined}
            />
          </React.Fragment>
        );
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
