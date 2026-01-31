// src/index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import { openProjectModal } from "./addProject.js";

console.log(greeting);

const addProjectButton = document.getElementById("addProjectButton");

addProjectButton.addEventListener("click", openProjectModal);
