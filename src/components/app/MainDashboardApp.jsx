import { useEffect, useState } from "react";
import ProgressBarApp from "./ProgressBarApp";
import TextContentMainDashboardApp from "./TextContentMainDashboardApp";
import AnswersContentMainDashboardApp from "./AnswersContentMainDashboardApp";
import FooterMainDashboardApp from "./FooterMainDashboardApp";

const modules = {
  introducao: {
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat arcu, blandit a augue in, tincidunt euismod mi. Fusce a leo ut lectus fermentum rutrum eu ac eros. Sed accumsan pretium velit a vulputate.",
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
};

const MainDashboardApp = () => {
  const [valueNowProgressBar, setValueNowProgressBar] = useState(0);
  const [statusFooter, setStatusFooter] = useState("default"); // default - correct - incorrect
  const [moduleNow, setModuleNow] = useState(modules.introducao);

  useEffect(() => {
    setValueNowProgressBar(valueNowProgressBar);
    setStatusFooter(statusFooter);
  }, [valueNowProgressBar, statusFooter]);

  function answerHandleClick(e) {
    setValueNowProgressBar(valueNowProgressBar + 20);
    setStatusFooter("correct");
    console.log(e.target.getAttribute("data-question-option"));
  }

  return (
    <main className="flex-grow-1 main-dashboard-app d-flex flex-column">
      <section className="content-main-dashboard-app d-flex flex-column align-items-center flex-grow-1 w-100 p-5">
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
      <FooterMainDashboardApp statusFooter={statusFooter} />
    </main>
  );
};

export default MainDashboardApp;
