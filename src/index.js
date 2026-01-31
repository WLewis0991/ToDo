// src/index.js
import "./styles.css";
import { greeting } from "./greeting.js";

console.log(greeting);



 const addProjectButton = document.getElementById("addProjectButton");
 const projectModal = document.getElementById("addProjectModal");
 addProjectButton.addEventListener("click", () => {
    projectModal.showModal();
 })