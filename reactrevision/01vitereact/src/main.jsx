
import { createElement } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Coffee from "./coffee.jsx";

const anotheruser = "Aditya codes for this";

const reactElement = createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click me to visit the page",
  anotheruser
);

createRoot(document.getElementById("root")).render(
 // reactElement
 <App />
);

