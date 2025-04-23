import { useState } from "react";
// import { useAuth } from "../../contexts/AuthContext";
import SidebarApp from "../../components/app/SidebarApp";
import MainDashboardApp from "../../components/app/MainDashboardApp";
import ModuleApp from "../../components/app/ModuleApp";
import { GlobalAppProvider } from "../../contexts/GlobalContextApp";
import Ranking from "../../components/app/Ranking";
const modules = [
  // {
  //   id: 1,
  //   name: "introducao",
  //   visibility: true,
  //   title: "Introdução ao JavaScript",
  //   text: `JavaScript is a popular programming...`,
  //   initial_view: true,
  //   questions: [
  //     {
  //       id: 1,
  //       visibility: true,
  //       title: "01 - Lorem Ipsum Dolor",
  //       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat arcu, blandit a augue in, tincidunt euismod mi. ",
  //       answers: [
  //         { option: 1, text: "teste Ipsum sit amet", active: false },
  //         { option: 2, text: "Lorem Ipsum sit amet", active: false },
  //         { option: 3, text: "Lorem Ipsum sit amet", active: false },
  //         { option: 4, text: "Lorem Ipsum sit amet", active: false },
  //       ],
  //       correct_answer: 2,
  //     },
  //     {
  //       id: 2,
  //       visibility: false,
  //       title: "02 - Dolor Sit Amet",
  //       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat arcu, blandit a augue in, tincidunt euismod mi. ",
  //       answers: [
  //         { option: 1, text: "Ipsum sit Lorem amet", active: false },
  //         { option: 2, text: "Ipsum sit Lorem amet", active: false },
  //         { option: 3, text: "Ipsum sit Lorem amet", active: false },
  //         { option: 4, text: "Ipsum sit Lorem amet", active: false },
  //       ],
  //       correct_answer: 4,
  //     },
  //     {
  //       id: 3,
  //       visibility: false,
  //       title: "03 - Dolor Sit Amet",
  //       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat arcu, blandit a augue in, tincidunt euismod mi. ",
  //       answers: [
  //         { option: 1, text: "Ipsum sit Lorem amet", active: false },
  //         { option: 2, text: "Ipsum sit Lorem amet", active: false },
  //         { option: 3, text: "Ipsum sit Lorem amet", active: false },
  //         { option: 4, text: "Ipsum sit Lorem amet", active: false },
  //       ],
  //       correct_answer: 3,
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   name: "modulo_01",
  //   visibility: false,
  //   title: "Módulo 1 - Lorem Ipsum",
  //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat arcu, blandit a augue in, tincidunt euismod mi. Fusce a leo ut lectus fermentum rutrum eu ac eros. Sed accumsan pretium velit a vulputate.",
  //   initial_view: true,
  //   questions: [
  //     {
  //       id: 1,
  //       visibility: true,
  //       title: "Lorem Ipsum Dolor",
  //       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat arcu, blandit a augue in, tincidunt euismod mi. ",
  //       answers: [
  //         { option: 1, text: "Lorem Ipsum sit amet", active: false },
  //         { option: 2, text: "Lorem Ipsum sit amet", active: false },
  //         { option: 3, text: "Lorem Ipsum sit amet", active: false },
  //         { option: 4, text: "Lorem Ipsum sit amet", active: false },
  //       ],
  //       correct_answer: 2,
  //     },
  //     {
  //       id: 2,
  //       visibility: false,
  //       title: "Dolor Sit Amet",
  //       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat arcu, blandit a augue in, tincidunt euismod mi. ",
  //       answers: [
  //         { option: 1, text: "Ipsum sit Lorem amet", active: false },
  //         { option: 2, text: "Ipsum sit Lorem amet", active: false },
  //         { option: 3, text: "Ipsum sit Lorem amet", active: false },
  //         { option: 4, text: "Ipsum sit Lorem amet", active: false },
  //       ],
  //       correct_answer: 4,
  //     },
  //   ],
  // },
  {
    id: 1,
    name: "introducao",
    visibility: true,
    title: "Introdução ao JavaScript",
    text: "JavaScript is a popular programming language initially designed for adding interactivity to websites. Over time, it has evolved into a versatile language used in various areas of software development. In the front-end, JavaScript works with HTML and CSS to create dynamic, interactive web pages. It is also used on the back-end with environments like Node.js, allowing developers to build full applications using one language, improving productivity and code maintenance. Key features of JavaScript include its ability to run directly in the browser, making it fast for web development, and its support for asynchronous programming, which helps manage tasks like data fetching without freezing the interface. Learning JavaScript unlocks numerous possibilities for building websites, web applications, and even mobile or desktop apps.\n\nTempos verbais estudados neste módulo:\n- To be (Simple Present)\n- Present Continuous\n- Simple Present\n- Imperatives",
    initial_view: true,
    questions: [
      {
        id: 1,
        visibility: true,
        title: "01 - Uso do verbo 'to be'",
        text: "Which sentence from the text contains the verb 'to be' in the Simple Present tense?",
        answers: [
          {
            option: 1,
            text: "JavaScript is a popular programming language.",
            active: false,
          },
          {
            option: 2,
            text: "JavaScript was created to manage databases.",
            active: false,
          },
          { option: 3, text: "JavaScript will be the future.", active: false },
          {
            option: 4,
            text: "JavaScript has evolved into a versatile language.",
            active: false,
          },
        ],
        correct_answer: 1,
      },
      {
        id: 2,
        visibility: false,
        title: "02 - Identificando o Present Continuous",
        text: "Which of the following is an example of Present Continuous based on the context of the text?",
        answers: [
          { option: 1, text: "JavaScript runs in the browser.", active: false },
          {
            option: 2,
            text: "Developers are using JavaScript to build apps.",
            active: false,
          },
          {
            option: 3,
            text: "JavaScript helps with web development.",
            active: false,
          },
          {
            option: 4,
            text: "JavaScript supports asynchronous programming.",
            active: false,
          },
        ],
        correct_answer: 2,
      },
      {
        id: 3,
        visibility: false,
        title: "03 - Imperatives no texto",
        text: "Which of these options is an imperative sentence you could say to a student starting to learn JavaScript?",
        answers: [
          { option: 1, text: "Learning JavaScript is useful.", active: false },
          { option: 2, text: "It is good to learn JavaScript.", active: false },
          {
            option: 3,
            text: "JavaScript can be learned quickly.",
            active: false,
          },
          {
            option: 4,
            text: "Learn JavaScript to create interactive pages.",
            active: false,
          },
        ],
        correct_answer: 4,
      },
      {
        id: 4,
        visibility: false,
        title: "04 - Afirmativa no Simple Present",
        text: "Choose the correct affirmative sentence in Simple Present from the text:",
        answers: [
          {
            option: 1,
            text: "JavaScript creating dynamic web pages.",
            active: false,
          },
          { option: 2, text: "JavaScript runs in the browser.", active: false },
          { option: 3, text: "JavaScript is building apps.", active: false },
          { option: 4, text: "JavaScript created pages.", active: false },
        ],
        correct_answer: 2,
      },
      {
        id: 5,
        visibility: false,
        title: "05 - Negativa no Simple Present",
        text: "Which is a correct negative sentence in Simple Present, based on the text?",
        answers: [
          {
            option: 1,
            text: "JavaScript doesn’t run in the browser.",
            active: false,
          },
          {
            option: 2,
            text: "JavaScript don’t supports asynchronous programming.",
            active: false,
          },
          {
            option: 3,
            text: "JavaScript does not create static pages only.",
            active: false,
          },
          { option: 4, text: "JavaScript didn’t work before.", active: false },
        ],
        correct_answer: 3,
      },
      {
        id: 6,
        visibility: false,
        title: "06 - Interrogativa com 'to be'",
        text: "Which is a correct question using 'to be' based on the text?",
        answers: [
          {
            option: 1,
            text: "Is JavaScript a useful language?",
            active: false,
          },
          { option: 2, text: "Do JavaScript works fast?", active: false },
          { option: 3, text: "JavaScript is a programming?", active: false },
          { option: 4, text: "Does JavaScript be popular?", active: false },
        ],
        correct_answer: 1,
      },
      {
        id: 7,
        visibility: false,
        title: "07 - Imperative correto",
        text: "Choose a sentence that gives a command or suggestion (imperative):",
        answers: [
          {
            option: 1,
            text: "Use JavaScript to improve your websites.",
            active: false,
          },
          {
            option: 2,
            text: "JavaScript is important for developers.",
            active: false,
          },
          {
            option: 3,
            text: "JavaScript creates dynamic content.",
            active: false,
          },
          { option: 4, text: "Learning JavaScript is great.", active: false },
        ],
        correct_answer: 1,
      },
    ],
  },
  {
    id: 2,
    name: "tempos_verbais",
    visibility: true,
    title: "Módulo 1 - Tempos Verbais",
    text: `Os tempos verbais indicam quando uma ação acontece e são essenciais para entender e construir frases em inglês. No texto sobre JavaScript, encontramos principalmente o Simple Present, o Present Continuous, o verbo to be no presente e imperativos. O Simple Present é usado para falar de fatos e rotinas, como em “JavaScript runs in the browser.” Já o Present Continuous descreve ações em andamento, como “JavaScript is becoming more powerful.”

O verbo to be aparece no presente como “am”, “is” ou “are”, sendo usado tanto sozinho quanto como parte de outras estruturas verbais. Os imperativos, por sua vez, são usados para dar instruções ou conselhos, como em “Learn JavaScript!”. Entender esses tempos ajuda a interpretar melhor os textos e a se comunicar com clareza em inglês.`,
    initial_view: true,
    questions: [
      {
        id: 1,
        visibility: true,
        title: "01 - Present Continuous question",
        text: "Is JavaScript becoming more versatile?",
        answers: [
          {
            option: 1,
            text: "Yes, it is becoming more versatile.",
            active: false,
          },
          { option: 2, text: "Yes, it become more versatile.", active: false },
          {
            option: 3,
            text: "Yes, it is became more versatile.",
            active: false,
          },
          {
            option: 4,
            text: "Yes, becoming it more versatile.",
            active: false,
          },
        ],
        correct_answer: 1,
      },
      {
        id: 2,
        visibility: false,
        title: "02 - Negative Simple Present",
        text: "Which sentence is correct?",
        answers: [
          { option: 1, text: "JavaScript don’t supports HTML.", active: false },
          {
            option: 2,
            text: "JavaScript doesn’t support styling.",
            active: false,
          },
          { option: 3, text: "JavaScript no support CSS.", active: false },
          { option: 4, text: "JavaScript not support HTML.", active: false },
        ],
        correct_answer: 2,
      },
      {
        id: 3,
        visibility: false,
        title: "03 - Affirmative Present Continuous",
        text: "Choose the sentence in the Present Continuous form.",
        answers: [
          {
            option: 1,
            text: "JavaScript is helping developers.",
            active: false,
          },
          { option: 2, text: "JavaScript help developers.", active: false },
          { option: 3, text: "JavaScript helps developers.", active: false },
          { option: 4, text: "JavaScript did help developers.", active: false },
        ],
        correct_answer: 1,
      },
      {
        id: 4,
        visibility: false,
        title: "04 - Imperative",
        text: "Choose the imperative sentence.",
        answers: [
          { option: 1, text: "To be learn JavaScript.", active: false },
          { option: 2, text: "You should learning JavaScript.", active: false },
          {
            option: 3,
            text: "Learn JavaScript and build apps.",
            active: false,
          },
          { option: 4, text: "JavaScript to be good.", active: false },
        ],
        correct_answer: 3,
      },
      {
        id: 5,
        visibility: false,
        title: "05 - 'To be' negative",
        text: "Which sentence uses 'to be' in negative form?",
        answers: [
          { option: 1, text: "JavaScript are not static.", active: false },
          { option: 2, text: "JavaScript is not a database.", active: false },
          { option: 3, text: "JavaScript not is a language.", active: false },
          { option: 4, text: "JavaScript am not flexible.", active: false },
        ],
        correct_answer: 2,
      },
      {
        id: 6,
        visibility: false,
        title: "06 - Simple Present question",
        text: "Does JavaScript help with dynamic web pages?",
        answers: [
          { option: 1, text: "Yes, it does.", active: false },
          { option: 2, text: "Yes, it do.", active: false },
          { option: 3, text: "Yes, it is.", active: false },
          { option: 4, text: "Yes, it doing.", active: false },
        ],
        correct_answer: 1,
      },
      {
        id: 7,
        visibility: false,
        title: "07 - Affirmative with 'to be'",
        text: "Which one is correct?",
        answers: [
          { option: 1, text: "JavaScript is very powerful.", active: false },
          { option: 2, text: "JavaScript be flexible.", active: false },
          { option: 3, text: "JavaScript are awesome.", active: false },
          { option: 4, text: "JavaScript am used everywhere.", active: false },
        ],
        correct_answer: 1,
      },
      // ... +6 perguntas com base nos tempos verbais (formas afirmativa, negativa, interrogativa, to be, etc.)
    ],
  },
  {
    id: 3,
    name: "compreensao_textual",
    visibility: true,
    title: "Módulo 2 - Compreensão Textual",
    text: `Compreensão textual é a habilidade de entender, interpretar e extrair informações de um texto. Ela envolve estratégias como:

    Skimming, que é a leitura rápida para captar a ideia geral do texto;

    Scanning, usada para localizar informações específicas;

    Leitura seletiva, que ajuda a focar apenas nos trechos mais relevantes para o objetivo da leitura.

Essas estratégias são muito úteis para quem estuda em outra língua, pois ajudam a economizar tempo e a melhorar o entendimento mesmo sem conhecer todas as palavras.`,
    initial_view: true,
    questions: [
      {
        id: 1,
        visibility: true,
        title: "01 - Skimming",
        text: "What is the general purpose of JavaScript as described in the text?",
        answers: [
          { option: 1, text: "To create databases", active: false },
          { option: 2, text: "To style HTML pages", active: false },
          {
            option: 3,
            text: "To add interactivity and build applications",
            active: false,
          },
          { option: 4, text: "To work only with CSS", active: false },
        ],
        correct_answer: 3,
      },
      {
        id: 2,
        visibility: false,
        title: "02 - Scanning",
        text: "Which environment allows JavaScript to be used on the back-end?",
        answers: [
          { option: 1, text: "React", active: false },
          { option: 2, text: "Node.js", active: false },
          { option: 3, text: "HTML", active: false },
          { option: 4, text: "MongoDB", active: false },
        ],
        correct_answer: 2,
      },
      {
        id: 3,
        visibility: false,
        title: "03 - Seletividade",
        text: "Which of the following is *not* mentioned as an area where JavaScript is used?",
        answers: [
          { option: 1, text: "Web applications", active: false },
          { option: 2, text: "Mobile apps", active: false },
          { option: 3, text: "Game development", active: false },
          { option: 4, text: "Desktop apps", active: false },
        ],
        correct_answer: 3,
      },
      {
        id: 4,
        visibility: false,
        title: "04 - Skimming",
        text: "What is the tone of the text?",
        answers: [
          { option: 1, text: "Critical", active: false },
          { option: 2, text: "Promotional and informative", active: false },
          { option: 3, text: "Sarcastic", active: false },
          { option: 4, text: "Negative", active: false },
        ],
        correct_answer: 2,
      },
      {
        id: 5,
        visibility: false,
        title: "05 - Scanning",
        text: "What does asynchronous programming in JavaScript help with?",
        answers: [
          { option: 1, text: "Speeding up animations", active: false },
          {
            option: 2,
            text: "Managing tasks like data fetching",
            active: false,
          },
          { option: 3, text: "Fixing bugs", active: false },
          { option: 4, text: "Writing CSS", active: false },
        ],
        correct_answer: 2,
      },
      {
        id: 6,
        visibility: false,
        title: "06 - Seletividade",
        text: "Which of the following best summarizes the final paragraph?",
        answers: [
          {
            option: 1,
            text: "JavaScript is difficult to learn.",
            active: false,
          },
          {
            option: 2,
            text: "JavaScript opens up many development opportunities.",
            active: false,
          },
          {
            option: 3,
            text: "JavaScript is only for web pages.",
            active: false,
          },
          {
            option: 4,
            text: "JavaScript replaces all programming languages.",
            active: false,
          },
        ],
        correct_answer: 2,
      },
      {
        id: 7,
        visibility: false,
        title: "07 - Scanning",
        text: "What does JavaScript work with on the front-end?",
        answers: [
          { option: 1, text: "Node.js and SQL", active: false },
          { option: 2, text: "HTML and CSS", active: false },
          { option: 3, text: "Python and Java", active: false },
          { option: 4, text: "Only with images", active: false },
        ],
        correct_answer: 2,
      },
      // ... +6 perguntas com skimming, scanning e leitura seletiva
    ],
  },
];

const IndexApp = () => {
  const [moduleNow, setModuleNow] = useState(0); // Módulo atual
  const [appModules, setAppModules] = useState(modules); // Módulos do App
  const [rankingVisibility, setRankingVisibility] = useState(false)

  const [buttons, setButtons] = useState([
    { label: "Introdução", active: false, module_id: 1 },
    { label: "Módulo 1", active: false, module_id: 2 },
    { label: "Módulo 2", active: false, module_id: 3 },
    // { label: "Ranking", active: false, module_id: 4 },
    // { label: "Perfil", active: false, module_id: 4 },
  ]);

  function handleRankingVisibility(){
    const updated = buttons.map((button) => ({...button, active: false}));
    setButtons(updated);
    setRankingVisibility((e) => !e);
  }

  function changeModule(e) {
    // console.log(e.target.innerText)
    const updated = buttons.map((button) => {
      if (
        button.label.toLowerCase() == e.target.innerText.trim().toLowerCase()
      ) {
        button.active = true;
        setModuleNow(button.module_id);
        return button;
      } else {
        button.active = false;
        return button;
      }
    });
    setRankingVisibility(false)
    setButtons([...updated]);
  }

  // console.log(appModules)
  // Função para iniciar perguntas, define o initial_view do módulo para false
  function initModule(e) {
    const moduleSelectedId = parseInt(
      e.currentTarget.getAttribute("data-module-id")
    );
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
      <GlobalAppProvider>
        <SidebarApp
        rankingVisibility={rankingVisibility}
          setRankingVisibility={handleRankingVisibility}
          handleClick={changeModule}
          buttons={buttons}
          setModuleNow={setModuleNow}
        />
        {!rankingVisibility && appModules
          .filter((module) => module.id == moduleNow)
          .map((module) => {
            return (
              <ModuleApp
                buttons={buttons}
                setButtons={setButtons}
                moduleNow={moduleNow}
                setModuleNow={setModuleNow}
                key={module.id}
                module={module}
                initModule={initModule}
                setAppModules={setAppModules}
                appModules={appModules}
                defaultModules={modules}
              />
            );
          })}
          {rankingVisibility && <Ranking />}

        {/* <MainDashboardApp moduleNow={moduleNow} /> */}
      </GlobalAppProvider>
    </>
  );
};

export default IndexApp;
