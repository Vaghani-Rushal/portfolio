const header = {
  homepage: "/",
  title: "RV.",
};

const about = {
  name: "Rushal  Vaghani",
  role: "Full Stack Developer",
  description:
    "An energetic and passionate fresher, I'm actively seeking a challenging role as a Web Developer to apply theoretical knowledge acquired through academic projects, driven by an authentic passion for coding. Proficient in problem-solving and adept at crafting efficient, scalable code to meet project objectives, I am eager to contribute to dynamic projects, leveraging my programming skills.",
  resume: "https://drive.google.com/uc?export=download&id=1DzUDD2RaCFO5ju3FbUi8RVv4Fd5ZsAtW",
  social: {
    linkedin: "https://linkedin.com/in/rushal-vaghani-47835b1bb",
    github: "https://github.com/Vaghani-Rushal?tab=repositories",
  },
};

const projects = [
  {
    name: "Weather Web - React",
    description:
      "Created web-application to get current and forcast weather status of search city, created using React.js ",
    stack: ["React", "OpenWeatherMap-api", "rapid-api"],
    sourceCode: "https://github.com/Vaghani-Rushal/weather-web-React.git",
    livePreview: "https://weather-web-reactapp.netlify.app/",
  },
  {
    name: "myFood - MERN",
    description:
      "Developed a MERN web application that allows users to browse a variety of food items, log in, sign up, manage their cart, and view their order history.",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    sourceCode: "https://github.com/Vaghani-Rushal/myFood-mern.git",
    livePreview: "https://myfood-mern.netlify.app",
  },
  {
    name: "Todo - React",
    description:
      "Created Todo webApplication using core react concepts and bootstrap library. ",
    stack: ["React", "Bootstrap", "useContext"],
    sourceCode: "https://github.com/Vaghani-Rushal/Todo-React.git",
    livePreview: "https://todo-web-react.netlify.app",
  },
  {
    name: "Online Forum - PHP",
    description:
      "Created Online Forum using PHP MySQL as Backend and Bootstrap Library as Frontend that allows user to SignUp, Login, Logout and create new Threads or comments on Exist threads. ",
    stack: ["PHP", "MySQL", "PHPMailer", "Bootstrap"],
    sourceCode: "https://github.com/Vaghani-Rushal/Forum-PHP.git",
    livePreview: "",
  },
  {
    name: "Myntra Clone - React",
    description:
      "Created Mytra Clone using React and Redux concepts. It fetch the items from Rest api and display them to user. User Add anr Remove item from cart.",
    stack: ["React", "Redux", "Bootstrap"],
    sourceCode: "https://github.com/Vaghani-Rushal/Myntra-clone-Frontend.git",
    livePreview: "",
  },
  {
    name: "News Web - React",
    description:
      "Developed React web application that uses newsapi to show news from different categories.",
    stack: ["React", "Api", "Bootstrap"],
    sourceCode: "https://github.com/Vaghani-Rushal/News-webapp-React.git",
    livePreview: "",
  },
];

const skills = [
  "C",
  "C++",
  "Java (Basics)",
  "Python (Basics)",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Bootstrap",
  "PHP",
  "MySQL",
];

const contact = {
  email: "vaghanirushal@gmail.com",
};

export { header, about, projects, skills, contact };
