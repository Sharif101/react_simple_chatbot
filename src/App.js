import "./App.css";
import ChatBot from "react-simple-chatbot";

function App() {
  const steps = [
    {
      id: "great",
      message: "Welcome to our site",
      trigger: "ask name",
    },
    {
      id: "ask name",
      message: "What's your name ?",
      trigger: "waiting",
    },
    {
      id: "waiting",
      user: true,
      trigger: "name",
    },
    {
      id: "name",
      message: "Hi {previousValue}, nice to meet you!",
      trigger: "select",
    },
    {
      id: "select",
      message: "Select your issue",
      trigger: "issue",
    },
    {
      id: "issue",
      options: [
        { value: "React", label: "React", trigger: "React" },
        { value: "Next", label: "Next", trigger: "Next" },
      ],
    },
    {
      id: "React",
      message: "What kind of issue are you face?",
      trigger: "react1",
    },
    {
      id: "react1",
      options: [
        { value: "hook", label: "hook", trigger: "hook" },
        { value: "api", label: "api", trigger: "api" },
      ],
    },
    {
      id: "hook",
      message: "go to w3school & clear your concept!!!",
      end: true,
    },
    {
      id: "api",
      message: "try fake api for clear concept !!!",
      end: true,
    },
    {
      id: "Next",
      message: "Thanks for telling your Next issue",
      end: true,
    },
  ];
  return (
    <div>
      <div className="box">
        <ChatBot steps={steps} />
      </div>
    </div>
  );
}

export default App;
