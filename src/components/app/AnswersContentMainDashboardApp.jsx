const AnswersContentMainDashboardApp = ({ questions, handleClick }) => {
  const theQuestions = [
    { option: 1, text: "Lorem Ipsum sit amet" },
    { option: 2, text: "Lorem Ipsum sit amet" },
    { option: 3, text: "Lorem Ipsum sit amet" },
    { option: 4, text: "Lorem Ipsum sit amet" },
  ];

  return (
    <div className="answers-content-main-dashboard-app mt-2">
      <ul className="w-100 text-white font-din-bold">
        {theQuestions.map((question) => {
          return (
            <li
              key={question.option}
              style={{ gridTemplateColumns: "40px 1fr", cursor: "pointer" }}
              className="border-sm rounded-3 justify-content-center align-items-center p-2 d-grid gap-3 mb-3"
              onClick={(e) => {
                handleClick(e);
              }}
              data-question-option={question.option}
            >
              <span
                data-question-option={question.option}
                className="border-sm p-1 rounded-3 inline-block justify-content-center align-items-center d-flex"
              >
                {question.option}
              </span>
              <span
                data-question-option={question.option}
                className="inline-block"
              >
                {question.text}
              </span>
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
