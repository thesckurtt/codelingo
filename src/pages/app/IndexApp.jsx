import { useState } from "react";
// import { useAuth } from "../../contexts/AuthContext";
import SidebarApp from "../../components/app/SidebarApp";
import MainDashboardApp from "../../components/app/MainDashboardApp";
import ModuleApp from "../../components/app/ModuleApp";
import { GlobalAppProvider } from "../../contexts/GlobalContextApp";
import Ranking from "../../components/app/Ranking";
// const modules = [
//   {
//     id: 1,
//     name: "introducao",
//     visibility: true,
//     title: "Introdução ao JavaScript",
//     text: "JavaScript is a popular programming language initially designed for adding interactivity to websites. Over time, it has evolved into a versatile language used in various areas of software development. In the front-end, JavaScript works with HTML and CSS to create dynamic, interactive web pages. It is also used on the back-end with environments like Node.js, allowing developers to build full applications using one language, improving productivity and code maintenance. Key features of JavaScript include its ability to run directly in the browser, making it fast for web development, and its support for asynchronous programming, which helps manage tasks like data fetching without freezing the interface. Learning JavaScript unlocks numerous possibilities for building websites, web applications, and even mobile or desktop apps.\n\nTempos verbais estudados neste módulo:\n- To be (Simple Present)\n- Present Continuous\n- Simple Present\n- Imperatives",
//     initial_view: true,
//     questions: [
//       {
//         id: 1,
//         visibility: true,
//         title: "01 - Uso do verbo 'to be'",
//         text: "Which sentence from the text contains the verb 'to be' in the Simple Present tense?",
//         answers: [
//           {
//             option: 1,
//             text: "JavaScript is a popular programming language.",
//             active: false,
//           },
//           {
//             option: 2,
//             text: "JavaScript was created to manage databases.",
//             active: false,
//           },
//           { option: 3, text: "JavaScript will be the future.", active: false },
//           {
//             option: 4,
//             text: "JavaScript has evolved into a versatile language.",
//             active: false,
//           },
//         ],
//         correct_answer: 1,
//       },
//       {
//         id: 2,
//         visibility: false,
//         title: "02 - Identificando o Present Continuous",
//         text: "Which of the following is an example of Present Continuous based on the context of the text?",
//         answers: [
//           { option: 1, text: "JavaScript runs in the browser.", active: false },
//           {
//             option: 2,
//             text: "Developers are using JavaScript to build apps.",
//             active: false,
//           },
//           {
//             option: 3,
//             text: "JavaScript helps with web development.",
//             active: false,
//           },
//           {
//             option: 4,
//             text: "JavaScript supports asynchronous programming.",
//             active: false,
//           },
//         ],
//         correct_answer: 2,
//       },
//       {
//         id: 3,
//         visibility: false,
//         title: "03 - Imperatives no texto",
//         text: "Which of these options is an imperative sentence you could say to a student starting to learn JavaScript?",
//         answers: [
//           { option: 1, text: "Learning JavaScript is useful.", active: false },
//           { option: 2, text: "It is good to learn JavaScript.", active: false },
//           {
//             option: 3,
//             text: "JavaScript can be learned quickly.",
//             active: false,
//           },
//           {
//             option: 4,
//             text: "Learn JavaScript to create interactive pages.",
//             active: false,
//           },
//         ],
//         correct_answer: 4,
//       },
//       {
//         id: 4,
//         visibility: false,
//         title: "04 - Afirmativa no Simple Present",
//         text: "Choose the correct affirmative sentence in Simple Present from the text:",
//         answers: [
//           {
//             option: 1,
//             text: "JavaScript creating dynamic web pages.",
//             active: false,
//           },
//           { option: 2, text: "JavaScript runs in the browser.", active: false },
//           { option: 3, text: "JavaScript is building apps.", active: false },
//           { option: 4, text: "JavaScript created pages.", active: false },
//         ],
//         correct_answer: 2,
//       },
//       {
//         id: 5,
//         visibility: false,
//         title: "05 - Negativa no Simple Present",
//         text: "Which is a correct negative sentence in Simple Present, based on the text?",
//         answers: [
//           {
//             option: 1,
//             text: "JavaScript doesn’t run in the browser.",
//             active: false,
//           },
//           {
//             option: 2,
//             text: "JavaScript don’t supports asynchronous programming.",
//             active: false,
//           },
//           {
//             option: 3,
//             text: "JavaScript does not create static pages only.",
//             active: false,
//           },
//           { option: 4, text: "JavaScript didn’t work before.", active: false },
//         ],
//         correct_answer: 3,
//       },
//       {
//         id: 6,
//         visibility: false,
//         title: "06 - Interrogativa com 'to be'",
//         text: "Which is a correct question using 'to be' based on the text?",
//         answers: [
//           {
//             option: 1,
//             text: "Is JavaScript a useful language?",
//             active: false,
//           },
//           { option: 2, text: "Do JavaScript works fast?", active: false },
//           { option: 3, text: "JavaScript is a programming?", active: false },
//           { option: 4, text: "Does JavaScript be popular?", active: false },
//         ],
//         correct_answer: 1,
//       },
//       {
//         id: 7,
//         visibility: false,
//         title: "07 - Imperative correto",
//         text: "Choose a sentence that gives a command or suggestion (imperative):",
//         answers: [
//           {
//             option: 1,
//             text: "Use JavaScript to improve your websites.",
//             active: false,
//           },
//           {
//             option: 2,
//             text: "JavaScript is important for developers.",
//             active: false,
//           },
//           {
//             option: 3,
//             text: "JavaScript creates dynamic content.",
//             active: false,
//           },
//           { option: 4, text: "Learning JavaScript is great.", active: false },
//         ],
//         correct_answer: 1,
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "tempos_verbais",
//     visibility: true,
//     title: "Módulo 1 - Tempos Verbais",
//     text: `Os tempos verbais indicam quando uma ação acontece e são essenciais para entender e construir frases em inglês. No texto sobre JavaScript, encontramos principalmente o Simple Present, o Present Continuous, o verbo to be no presente e imperativos. O Simple Present é usado para falar de fatos e rotinas, como em “JavaScript runs in the browser.” Já o Present Continuous descreve ações em andamento, como “JavaScript is becoming more powerful.”

// O verbo to be aparece no presente como “am”, “is” ou “are”, sendo usado tanto sozinho quanto como parte de outras estruturas verbais. Os imperativos, por sua vez, são usados para dar instruções ou conselhos, como em “Learn JavaScript!”. Entender esses tempos ajuda a interpretar melhor os textos e a se comunicar com clareza em inglês.`,
//     initial_view: true,
//     questions: [
//       {
//         id: 1,
//         visibility: true,
//         title: "01 - Present Continuous question",
//         text: "Is JavaScript becoming more versatile?",
//         answers: [
//           {
//             option: 1,
//             text: "Yes, it is becoming more versatile.",
//             active: false,
//           },
//           { option: 2, text: "Yes, it become more versatile.", active: false },
//           {
//             option: 3,
//             text: "Yes, it is became more versatile.",
//             active: false,
//           },
//           {
//             option: 4,
//             text: "Yes, becoming it more versatile.",
//             active: false,
//           },
//         ],
//         correct_answer: 1,
//       },
//       {
//         id: 2,
//         visibility: false,
//         title: "02 - Negative Simple Present",
//         text: "Which sentence is correct?",
//         answers: [
//           { option: 1, text: "JavaScript don’t supports HTML.", active: false },
//           {
//             option: 2,
//             text: "JavaScript doesn’t support styling.",
//             active: false,
//           },
//           { option: 3, text: "JavaScript no support CSS.", active: false },
//           { option: 4, text: "JavaScript not support HTML.", active: false },
//         ],
//         correct_answer: 2,
//       },
//       {
//         id: 3,
//         visibility: false,
//         title: "03 - Affirmative Present Continuous",
//         text: "Choose the sentence in the Present Continuous form.",
//         answers: [
//           {
//             option: 1,
//             text: "JavaScript is helping developers.",
//             active: false,
//           },
//           { option: 2, text: "JavaScript help developers.", active: false },
//           { option: 3, text: "JavaScript helps developers.", active: false },
//           { option: 4, text: "JavaScript did help developers.", active: false },
//         ],
//         correct_answer: 1,
//       },
//       {
//         id: 4,
//         visibility: false,
//         title: "04 - Imperative",
//         text: "Choose the imperative sentence.",
//         answers: [
//           { option: 1, text: "To be learn JavaScript.", active: false },
//           { option: 2, text: "You should learning JavaScript.", active: false },
//           {
//             option: 3,
//             text: "Learn JavaScript and build apps.",
//             active: false,
//           },
//           { option: 4, text: "JavaScript to be good.", active: false },
//         ],
//         correct_answer: 3,
//       },
//       {
//         id: 5,
//         visibility: false,
//         title: "05 - 'To be' negative",
//         text: "Which sentence uses 'to be' in negative form?",
//         answers: [
//           { option: 1, text: "JavaScript are not static.", active: false },
//           { option: 2, text: "JavaScript is not a database.", active: false },
//           { option: 3, text: "JavaScript not is a language.", active: false },
//           { option: 4, text: "JavaScript am not flexible.", active: false },
//         ],
//         correct_answer: 2,
//       },
//       {
//         id: 6,
//         visibility: false,
//         title: "06 - Simple Present question",
//         text: "Does JavaScript help with dynamic web pages?",
//         answers: [
//           { option: 1, text: "Yes, it does.", active: false },
//           { option: 2, text: "Yes, it do.", active: false },
//           { option: 3, text: "Yes, it is.", active: false },
//           { option: 4, text: "Yes, it doing.", active: false },
//         ],
//         correct_answer: 1,
//       },
//       {
//         id: 7,
//         visibility: false,
//         title: "07 - Affirmative with 'to be'",
//         text: "Which one is correct?",
//         answers: [
//           { option: 1, text: "JavaScript is very powerful.", active: false },
//           { option: 2, text: "JavaScript be flexible.", active: false },
//           { option: 3, text: "JavaScript are awesome.", active: false },
//           { option: 4, text: "JavaScript am used everywhere.", active: false },
//         ],
//         correct_answer: 1,
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "compreensao_textual",
//     visibility: true,
//     title: "Módulo 2 - Compreensão Textual",
//     text: `Compreensão textual é a habilidade de entender, interpretar e extrair informações de um texto. Ela envolve estratégias como:

//     Skimming, que é a leitura rápida para captar a ideia geral do texto;

//     Scanning, usada para localizar informações específicas;

//     Leitura seletiva, que ajuda a focar apenas nos trechos mais relevantes para o objetivo da leitura.

// Essas estratégias são muito úteis para quem estuda em outra língua, pois ajudam a economizar tempo e a melhorar o entendimento mesmo sem conhecer todas as palavras.`,
//     initial_view: true,
//     questions: [
//       {
//         id: 1,
//         visibility: true,
//         title: "01 - Skimming",
//         text: "What is the general purpose of JavaScript as described in the text?",
//         answers: [
//           { option: 1, text: "To create databases", active: false },
//           { option: 2, text: "To style HTML pages", active: false },
//           {
//             option: 3,
//             text: "To add interactivity and build applications",
//             active: false,
//           },
//           { option: 4, text: "To work only with CSS", active: false },
//         ],
//         correct_answer: 3,
//       },
//       {
//         id: 2,
//         visibility: false,
//         title: "02 - Scanning",
//         text: "Which environment allows JavaScript to be used on the back-end?",
//         answers: [
//           { option: 1, text: "React", active: false },
//           { option: 2, text: "Node.js", active: false },
//           { option: 3, text: "HTML", active: false },
//           { option: 4, text: "MongoDB", active: false },
//         ],
//         correct_answer: 2,
//       },
//       {
//         id: 3,
//         visibility: false,
//         title: "03 - Seletividade",
//         text: "Which of the following is *not* mentioned as an area where JavaScript is used?",
//         answers: [
//           { option: 1, text: "Web applications", active: false },
//           { option: 2, text: "Mobile apps", active: false },
//           { option: 3, text: "Game development", active: false },
//           { option: 4, text: "Desktop apps", active: false },
//         ],
//         correct_answer: 3,
//       },
//       {
//         id: 4,
//         visibility: false,
//         title: "04 - Skimming",
//         text: "What is the tone of the text?",
//         answers: [
//           { option: 1, text: "Critical", active: false },
//           { option: 2, text: "Promotional and informative", active: false },
//           { option: 3, text: "Sarcastic", active: false },
//           { option: 4, text: "Negative", active: false },
//         ],
//         correct_answer: 2,
//       },
//       {
//         id: 5,
//         visibility: false,
//         title: "05 - Scanning",
//         text: "What does asynchronous programming in JavaScript help with?",
//         answers: [
//           { option: 1, text: "Speeding up animations", active: false },
//           {
//             option: 2,
//             text: "Managing tasks like data fetching",
//             active: false,
//           },
//           { option: 3, text: "Fixing bugs", active: false },
//           { option: 4, text: "Writing CSS", active: false },
//         ],
//         correct_answer: 2,
//       },
//       {
//         id: 6,
//         visibility: false,
//         title: "06 - Seletividade",
//         text: "Which of the following best summarizes the final paragraph?",
//         answers: [
//           {
//             option: 1,
//             text: "JavaScript is difficult to learn.",
//             active: false,
//           },
//           {
//             option: 2,
//             text: "JavaScript opens up many development opportunities.",
//             active: false,
//           },
//           {
//             option: 3,
//             text: "JavaScript is only for web pages.",
//             active: false,
//           },
//           {
//             option: 4,
//             text: "JavaScript replaces all programming languages.",
//             active: false,
//           },
//         ],
//         correct_answer: 2,
//       },
//       {
//         id: 7,
//         visibility: false,
//         title: "07 - Scanning",
//         text: "What does JavaScript work with on the front-end?",
//         answers: [
//           { option: 1, text: "Node.js and SQL", active: false },
//           { option: 2, text: "HTML and CSS", active: false },
//           { option: 3, text: "Python and Java", active: false },
//           { option: 4, text: "Only with images", active: false },
//         ],
//         correct_answer: 2,
//       },
//     ],
//   },
// ];

const modules = [
  {
    "id": 1,
    "name": "introducao",
    "visibility": true,
    "title": "Introdução ao PHP",
    "text": "PHP is a server-side scripting language widely used for web development. It was originally created in 1994 and has become a powerful tool for building dynamic web applications. PHP was very simple in its early stages, but it has evolved significantly. Today, many developers are using PHP with modern frameworks like Laravel. This language has been used to create large-scale websites and continues to be relevant in the development community.\n\nTempos verbais estudados neste módulo:\n- To be (Simple Past)\n- Past Continuous\n- Simple Past\n- Present Perfect",
    "initial_view": true,
    "questions": [
      {
        "id": 1,
        "visibility": true,
        "title": "01 - Uso do verbo 'to be' no passado",
        "text": "Which sentence from the text uses the verb 'to be' in the Simple Past tense?",
        "answers": [
          {
            "option": 1,
            "text": "PHP is widely used for web development.",
            "active": false
          },
          {
            "option": 2,
            "text": "PHP was originally created in 1994.",
            "active": false
          },
          {
            "option": 3,
            "text": "PHP will be used in the future.",
            "active": false
          },
          {
            "option": 4,
            "text": "PHP has become a popular language.",
            "active": false
          }
        ],
        "correct_answer": 2
      },
      {
        "id": 2,
        "visibility": false,
        "title": "02 - Frase no Past Continuous",
        "text": "Which of the following is an example of the Past Continuous tense?",
        "answers": [
          {
            "option": 1,
            "text": "PHP helped developers build websites.",
            "active": false
          },
          {
            "option": 2,
            "text": "Many developers are using PHP today.",
            "active": false
          },
          {
            "option": 3,
            "text": "PHP was evolving rapidly in the 2000s.",
            "active": false
          },
          {
            "option": 4,
            "text": "PHP has many useful features.",
            "active": false
          }
        ],
        "correct_answer": 3
      },
      {
        "id": 3,
        "visibility": false,
        "title": "03 - Frase no Simple Past",
        "text": "Choose the sentence that is in the Simple Past tense:",
        "answers": [
          {
            "option": 1,
            "text": "PHP helps build dynamic pages.",
            "active": false
          },
          {
            "option": 2,
            "text": "PHP has been evolving constantly.",
            "active": false
          },
          {
            "option": 3,
            "text": "PHP was created to make web development easier.",
            "active": false
          },
          {
            "option": 4,
            "text": "Developers use PHP for web systems.",
            "active": false
          }
        ],
        "correct_answer": 3
      },
      {
        "id": 4,
        "visibility": false,
        "title": "04 - Frase no Present Perfect",
        "text": "Which sentence is in the Present Perfect tense?",
        "answers": [
          {
            "option": 1,
            "text": "PHP evolved fast.",
            "active": false
          },
          {
            "option": 2,
            "text": "PHP is evolving fast.",
            "active": false
          },
          {
            "option": 3,
            "text": "PHP has been used in many big projects.",
            "active": false
          },
          {
            "option": 4,
            "text": "PHP helps developers daily.",
            "active": false
          }
        ],
        "correct_answer": 3
      },
      {
        "id": 5,
        "visibility": false,
        "title": "05 - Frase negativa no Simple Past",
        "text": "Choose a correct negative sentence in the Simple Past:",
        "answers": [
          {
            "option": 1,
            "text": "PHP didn’t support object-oriented programming at first.",
            "active": false
          },
          {
            "option": 2,
            "text": "PHP doesn’t worked before.",
            "active": false
          },
          {
            "option": 3,
            "text": "PHP did not supports databases.",
            "active": false
          },
          {
            "option": 4,
            "text": "PHP no supported syntax then.",
            "active": false
          }
        ],
        "correct_answer": 1
      },
      {
        "id": 6,
        "visibility": false,
        "title": "06 - Interrogativa com 'to be' no passado",
        "text": "Which is a correct question using 'to be' in the Simple Past?",
        "answers": [
          {
            "option": 1,
            "text": "Was PHP used in the early internet?",
            "active": false
          },
          {
            "option": 2,
            "text": "PHP is was great?",
            "active": false
          },
          {
            "option": 3,
            "text": "Did PHP be easy to learn?",
            "active": false
          },
          {
            "option": 4,
            "text": "PHP was used?",
            "active": false
          }
        ],
        "correct_answer": 1
      },
      {
        "id": 7,
        "visibility": false,
        "title": "07 - Frase no Present Perfect correta",
        "text": "Choose a sentence that correctly uses the Present Perfect tense:",
        "answers": [
          {
            "option": 1,
            "text": "PHP created dynamic websites.",
            "active": false
          },
          {
            "option": 2,
            "text": "PHP has changed over the years.",
            "active": false
          },
          {
            "option": 3,
            "text": "PHP is changing every year.",
            "active": false
          },
          {
            "option": 4,
            "text": "PHP changes the web.",
            "active": false
          }
        ],
        "correct_answer": 2
      }
    ]
  },
  {
    "id": 2,
    "name": "forma_afirmativa",
    "visibility": false,
    "title": "Módulo 2 - Forma Afirmativa",
    "text": "A forma afirmativa é usada para declarar fatos ou ações positivas. Em PHP, usamos frases afirmativas para descrever o comportamento do código, como: 'PHP handles server-side logic.' ou 'The function returns the expected value.'",
    "initial_view": false,
    "questions": [
      {
        "id": 1,
        "visibility": true,
        "title": "01 - Função Afirmativa",
        "text": "Choose the correct affirmative sentence:",
        "answers": [
          { "option": 1, "text": "PHP not executes functions automatically.", "active": false },
          { "option": 2, "text": "PHP executes functions automatically.", "active": false },
          { "option": 3, "text": "Does PHP executes functions automatically?", "active": false },
          { "option": 4, "text": "PHP don't executes functions automatically.", "active": false }
        ],
        "correct_answer": 2
      },
      {
        "id": 2,
        "visibility": false,
        "title": "02 - Função Afirmativa",
        "text": "Select the correct affirmative sentence:",
        "answers": [
          { "option": 1, "text": "The function don't return the expected result.", "active": false },
          { "option": 2, "text": "The function returns the expected result.", "active": false },
          { "option": 3, "text": "Does the function returns the expected result?", "active": false },
          { "option": 4, "text": "The function return the expected result.", "active": false }
        ],
        "correct_answer": 2
      },
      {
        "id": 3,
        "visibility": false,
        "title": "03 - Função Afirmativa",
        "text": "Choose the correct sentence in the affirmative form:",
        "answers": [
          { "option": 1, "text": "PHP is a server-side programming language.", "active": false },
          { "option": 2, "text": "PHP is server-side programming language.", "active": false },
          { "option": 3, "text": "PHP are a server-side programming language.", "active": false },
          { "option": 4, "text": "PHP are server-side programming language.", "active": false }
        ],
        "correct_answer": 1
      },
      {
        "id": 4,
        "visibility": false,
        "title": "04 - Função Afirmativa",
        "text": "Select the correct affirmative sentence about PHP syntax:",
        "answers": [
          { "option": 1, "text": "PHP supports object-oriented programming.", "active": false },
          { "option": 2, "text": "PHP support object-oriented programming.", "active": false },
          { "option": 3, "text": "PHP supporting object-oriented programming.", "active": false },
          { "option": 4, "text": "PHP is support object-oriented programming.", "active": false }
        ],
        "correct_answer": 1
      },
      {
        "id": 5,
        "visibility": false,
        "title": "05 - Função Afirmativa",
        "text": "Choose the correct affirmative sentence about a PHP array:",
        "answers": [
          { "option": 1, "text": "Arrays in PHP stores multiple values in a single variable.", "active": false },
          { "option": 2, "text": "Arrays in PHP store multiple values in a single variable.", "active": false },
          { "option": 3, "text": "Arrays in PHP storing multiple values in a single variable.", "active": false },
          { "option": 4, "text": "Arrays in PHP stored multiple values in a single variable.", "active": false }
        ],
        "correct_answer": 2
      },
      {
        "id": 6,
        "visibility": false,
        "title": "06 - Função Afirmativa",
        "text": "Select the correct sentence in the affirmative form about functions in PHP:",
        "answers": [
          { "option": 1, "text": "Functions in PHP are reusable blocks of code.", "active": false },
          { "option": 2, "text": "Functions in PHP is reusable blocks of code.", "active": false },
          { "option": 3, "text": "Function in PHP are reusable blocks of code.", "active": false },
          { "option": 4, "text": "Functions in PHP reusable blocks of code.", "active": false }
        ],
        "correct_answer": 1
      }
    ]
  },
  {
    "id": 3,
    "name": "forma_negativa",
    "visibility": false,
    "title": "Módulo 3 - Forma Negativa",
    "text": "A forma negativa expressa a negação de uma ação. Em PHP, usamos essa forma para indicar que algo não acontece, como: 'PHP does not support multithreading natively.' ou 'The function doesn’t return a value.'",
    "initial_view": false,
    "questions": [
      {
        "id": 1,
        "visibility": true,
        "title": "01 - Comando Negativo",
        "text": "Choose the correct negative sentence:",
        "answers": [
          { "option": 1, "text": "PHP support dynamic typing.", "active": false },
          { "option": 2, "text": "PHP doesn't support dynamic typing.", "active": false },
          { "option": 3, "text": "PHP no supports dynamic typing.", "active": false },
          { "option": 4, "text": "PHP don't supports dynamic typing.", "active": false }
        ],
        "correct_answer": 2
      },
      {
        "id": 2,
        "visibility": false,
        "title": "02 - Comando Negativo",
        "text": "Choose the correct negative sentence:",
        "answers": [
          { "option": 1, "text": "PHP do not support exceptions.", "active": false },
          { "option": 2, "text": "PHP doesn't support exceptions.", "active": false },
          { "option": 3, "text": "PHP no support exceptions.", "active": false },
          { "option": 4, "text": "PHP isn't support exceptions.", "active": false }
        ],
        "correct_answer": 2
      },
      {
        "id": 3,
        "visibility": false,
        "title": "03 - Comando Negativo",
        "text": "Select the correct negative sentence about functions in PHP:",
        "answers": [
          { "option": 1, "text": "PHP functions not return values by default.", "active": false },
          { "option": 2, "text": "PHP functions don't return values by default.", "active": false },
          { "option": 3, "text": "PHP functions doesn't return values by default.", "active": false },
          { "option": 4, "text": "PHP functions does not return values by default.", "active": false }
        ],
        "correct_answer": 2
      },
      {
        "id": 4,
        "visibility": false,
        "title": "04 - Comando Negativo",
        "text": "Choose the correct negative sentence about arrays in PHP:",
        "answers": [
          { "option": 1, "text": "Arrays in PHP not store multiple data types.", "active": false },
          { "option": 2, "text": "Arrays in PHP doesn't store multiple data types.", "active": false },
          { "option": 3, "text": "Arrays in PHP don't store multiple data types.", "active": false },
          { "option": 4, "text": "Arrays in PHP isn't store multiple data types.", "active": false }
        ],
        "correct_answer": 3
      },
      {
        "id": 5,
        "visibility": false,
        "title": "05 - Comando Negativo",
        "text": "Select the correct negative sentence about PHP loops:",
        "answers": [
          { "option": 1, "text": "PHP loops doesn't run indefinitely.", "active": false },
          { "option": 2, "text": "PHP loops don't run indefinitely.", "active": false },
          { "option": 3, "text": "PHP loops not run indefinitely.", "active": false },
          { "option": 4, "text": "PHP loops isn't run indefinitely.", "active": false }
        ],
        "correct_answer": 2
      },
      {
        "id": 6,
        "visibility": false,
        "title": "06 - Comando Negativo",
        "text": "Choose the correct negative sentence about PHP variables:",
        "answers": [
          { "option": 1, "text": "PHP variables not need to be declared before use.", "active": false },
          { "option": 2, "text": "PHP variables doesn't need to be declared before use.", "active": false },
          { "option": 3, "text": "PHP variables don't need to be declared before use.", "active": false },
          { "option": 4, "text": "PHP variables isn't need to be declared before use.", "active": false }
        ],
        "correct_answer": 3
      }
    ]
  },
  {
    "id": 4,
    "name": "forma_interrogativa",
    "visibility": false,
    "title": "Módulo 4 - Forma Interrogativa",
    "text": "A forma interrogativa é usada para fazer perguntas. Em PHP, usamos essa forma para investigar comportamentos ou características, como: 'Does PHP support object-oriented programming?' ou 'Is this function returning null?'",
    "initial_view": false,
    "questions": [
      {
        "id": 1,
        "visibility": true,
        "title": "01 - Pergunta com 'Does'",
        "text": "Which question is correct?",
        "answers": [
          { "option": 1, "text": "Do PHP supports arrays?", "active": false },
          { "option": 2, "text": "Does PHP support arrays?", "active": false },
          { "option": 3, "text": "PHP does support arrays?", "active": false },
          { "option": 4, "text": "PHP do supports arrays?", "active": false }
        ],
        "correct_answer": 2
      },
      {
        "id": 2,
        "visibility": false,
        "title": "02 - Pergunta com 'Does'",
        "text": "Which is the correct question about PHP functions?",
        "answers": [
          { "option": 1, "text": "Does PHP functions return values?", "active": false },
          { "option": 2, "text": "Do PHP functions return values?", "active": false },
          { "option": 3, "text": "Does PHP function return values?", "active": false },
          { "option": 4, "text": "Does PHP function returns values?", "active": false }
        ],
        "correct_answer": 2
      },
      {
        "id": 3,
        "visibility": false,
        "title": "03 - Pergunta com 'Is'",
        "text": "Select the correct question about PHP syntax:",
        "answers": [
          { "option": 1, "text": "Is PHP supports all databases?", "active": false },
          { "option": 2, "text": "Does PHP supports all databases?", "active": false },
          { "option": 3, "text": "Is PHP support all databases?", "active": false },
          { "option": 4, "text": "Is PHP supported by all databases?", "active": false }
        ],
        "correct_answer": 4
      },
      {
        "id": 4,
        "visibility": false,
        "title": "04 - Pergunta com 'Does'",
        "text": "Choose the correct question regarding PHP variables:",
        "answers": [
          { "option": 1, "text": "Does PHP variables need to be declared?", "active": false },
          { "option": 2, "text": "Do PHP variables need to be declared?", "active": false },
          { "option": 3, "text": "Does PHP variable need to be declared?", "active": false },
          { "option": 4, "text": "Do PHP variable need to be declared?", "active": false }
        ],
        "correct_answer": 2
      },
      {
        "id": 5,
        "visibility": false,
        "title": "05 - Pergunta com 'Is'",
        "text": "Which of these is the correct question about PHP arrays?",
        "answers": [
          { "option": 1, "text": "Is PHP arrays indexed?", "active": false },
          { "option": 2, "text": "Are PHP arrays indexed?", "active": false },
          { "option": 3, "text": "Are PHP array indexed?", "active": false },
          { "option": 4, "text": "Is PHP array indexed?", "active": false }
        ],
        "correct_answer": 2
      },
      {
        "id": 6,
        "visibility": false,
        "title": "06 - Pergunta com 'Does'",
        "text": "Select the correct question about PHP support for object-oriented programming:",
        "answers": [
          { "option": 1, "text": "Does PHP supports object-oriented programming?", "active": false },
          { "option": 2, "text": "Does PHP support object-oriented programming?", "active": false },
          { "option": 3, "text": "Do PHP support object-oriented programming?", "active": false },
          { "option": 4, "text": "Is PHP supports object-oriented programming?", "active": false }
        ],
        "correct_answer": 2
      }
    ]
  }
  
  
  
]
const IndexApp = () => {
  const [moduleNow, setModuleNow] = useState(0); // Módulo atual
  const [appModules, setAppModules] = useState(modules); // Módulos do App
  const [rankingVisibility, setRankingVisibility] = useState(false)

  const [buttons, setButtons] = useState([
    { label: "Introdução", active: false, module_id: 1 },
    { label: "Módulo 1", active: false, module_id: 2 },
    { label: "Módulo 2", active: false, module_id: 3 },
    { label: "Módulo 3", active: false, module_id: 4 },
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
