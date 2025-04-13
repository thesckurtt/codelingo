import { useState } from "react";
// import { useAuth } from "../../contexts/AuthContext";
import SidebarApp from "../../components/app/SidebarApp";
import MainDashboardApp from "../../components/app/MainDashboardApp";
import ModuleApp from "../../components/app/ModuleApp";

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
          { option: 1, text: "teste Ipsum sit amet", active: false },
          { option: 2, text: "Lorem Ipsum sit amet", active: false },
          { option: 3, text: "Lorem Ipsum sit amet", active: false },
          { option: 4, text: "Lorem Ipsum sit amet", active: false },
        ],
        correct_answer: 2,
      },
      {
        id: 2,
        visibility: false,
        title: "02 - Dolor Sit Amet",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat arcu, blandit a augue in, tincidunt euismod mi. ",
        answers: [
          { option: 1, text: "Ipsum sit Lorem amet", active: false },
          { option: 2, text: "Ipsum sit Lorem amet", active: false },
          { option: 3, text: "Ipsum sit Lorem amet", active: false },
          { option: 4, text: "Ipsum sit Lorem amet", active: false },
        ],
        correct_answer: 4,
      },
      {
        id: 3,
        visibility: false,
        title: "03 - Dolor Sit Amet",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat arcu, blandit a augue in, tincidunt euismod mi. ",
        answers: [
          { option: 1, text: "Ipsum sit Lorem amet", active: false },
          { option: 2, text: "Ipsum sit Lorem amet", active: false },
          { option: 3, text: "Ipsum sit Lorem amet", active: false },
          { option: 4, text: "Ipsum sit Lorem amet", active: false },
        ],
        correct_answer: 3,
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
          { option: 1, text: "Lorem Ipsum sit amet", active: false },
          { option: 2, text: "Lorem Ipsum sit amet", active: false },
          { option: 3, text: "Lorem Ipsum sit amet", active: false },
          { option: 4, text: "Lorem Ipsum sit amet", active: false },
        ],
        correct_answer: 2,
      },
      {
        id: 2,
        visibility: false,
        title: "Dolor Sit Amet",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat arcu, blandit a augue in, tincidunt euismod mi. ",
        answers: [
          { option: 1, text: "Ipsum sit Lorem amet",active: false },
          { option: 2, text: "Ipsum sit Lorem amet",active: false },
          { option: 3, text: "Ipsum sit Lorem amet",active: false },
          { option: 4, text: "Ipsum sit Lorem amet",active: false },
        ],
        correct_answer: 4,
      },
    ],
  },
];

const IndexApp = () => {
  const [moduleNow, setModuleNow] = useState(0); // Módulo atual
  const [appModules, setAppModules] = useState(modules); // Módulos do App

  // console.log(appModules)
  // Função para iniciar perguntas, define o initial_view do módulo para false
  function initModule(e) {
    const moduleSelectedId = parseInt(e.currentTarget.getAttribute("data-module-id"));
    const updatedModules = appModules.map((module) => {
      if (module.id === moduleSelectedId) {
        return { ...module, initial_view: false };
      }
      return module;
    });
  
    setAppModules(updatedModules);
    setModuleNow(moduleSelectedId);
  }

  document
    .querySelector("body")
    .setAttribute(
      "class",
      "d-flex bg-dashboard-color body-dashboard min-vh-100"
    );

  document
    .getElementById("root")
    .setAttribute(
      "class",
      "d-flex bg-dashboard-color body-dashboard w-100 min-vh-100"
    );

    // console.log(appModules)
  // const { user } = useAuth();

  return (
    <>
      <SidebarApp setModuleNow={setModuleNow} />
      {appModules
        .filter((module) => module.id == moduleNow)
        .map((module) => {
          return (
            <ModuleApp
              key={module.id}
              module={module}
              initModule={initModule}
              setAppModules={setAppModules}
              appModules={appModules}
            />
          );
        })}

      {/* <MainDashboardApp moduleNow={moduleNow} /> */}
    </>
  );
};

export default IndexApp;
