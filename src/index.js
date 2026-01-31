// src/index.js
import "./styles.css";
import { greeting } from "./greeting.js";

console.log(greeting);



 const addProjectButton = document.getElementById("addProjectButton");
 const projectModal = document.getElementById("addProjectModal");
 const addProject = document.getElementById("addProject");
 const cancelProject = document.getElementById("cancelProject");
 const projectNameInput = document.getElementById("projectNameInput");

 addProjectButton.addEventListener("click", () => {
    projectModal.showModal();
 })

 addProject.addEventListener("click", () => {
    projectModal.close();
 })

 cancelProject.addEventListener("click", () => {
    projectNameInput.value="";
    projectModal.close();
 })