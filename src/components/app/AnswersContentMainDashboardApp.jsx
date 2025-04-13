const AnswersContentMainDashboardApp = ({
  answers,
  handleClick,
  correctAnswer,
  questionsLenght,
  questionId,
  setSelectedAnswer
}) => {
  // const theanswers = [
  //   { option: 1, text: "Lorem Ipsum sit amet" },
  //   { option: 2, text: "Lorem Ipsum sit amet" },
  //   { option: 3, text: "Lorem Ipsum sit amet" },
  //   { option: 4, text: "Lorem Ipsum sit amet" },
  // ];
  // console.log('aqui', questionsLenght)
  return (
    <div className="answers-content-main-dashboard-app mt-2">
      <ul className="w-100 text-white font-din-bold">
        {answers.map((answer) => {
          return (
            <li
              key={answer.option}
              style={{ gridTemplateColumns: "40px 1fr", cursor: "pointer" }}
              className={`li-answer border-sm rounded-3 justify-content-center align-items-center p-2 d-grid gap-3 mb-3 ${
                answer.active ? "active" : ""
              }`}
              onClick={(e) => {
                handleClick(
                  e,
                  correctAnswer,
                  answer.option,
                  questionsLenght,
                  questionId,
                  setSelectedAnswer
                );
              }}
            >
              <span className="border-sm p-1 rounded-3 inline-block justify-content-center align-items-center d-flex">
                {answer.option}
              </span>
              <span className="inline-block">{answer.text}</span>
            </li>
          );
        })}
        {/* <li
          style={{ gridTemplateColumns: "40px 1fr", cursor: "pointer" }}
          className="border-sm rounded-3 justify-content-center align-items-center p-2 d-grid gap-3 mb-3"
        >
          <span className="border-sm p-1 rounded-3 inline-block justify-content-center align-items-center d-flex">
            1
          </span>
          <span className="inline-block">Lorem Ipsum sit amet</span>
        </li>
        <li
          style={{ gridTemplateColumns: "40px 1fr", cursor: "pointer" }}
          className="border-sm rounded-3 justify-content-center align-items-center p-2 d-grid gap-3 mb-3"
        >
          <span className="border-sm p-1 rounded-3 inline-block justify-content-center align-items-center d-flex">
            1
          </span>
          <span className="inline-block">Lorem Ipsum sit amet</span>
        </li>
        <li
          style={{ gridTemplateColumns: "40px 1fr", cursor: "pointer" }}
          className="border-sm rounded-3 justify-content-center align-items-center p-2 d-grid gap-3 mb-3"
        >
          <span className="border-sm p-1 rounded-3 inline-block justify-content-center align-items-center d-flex">
            1
          </span>
          <span className="inline-block">Lorem Ipsum sit amet</span>
        </li> */}
      </ul>
    </div>
  );
};

export default AnswersContentMainDashboardApp;
