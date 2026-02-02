// src/index.js
import "./styles.css";
import { openProjectModal } from "./openProjectModule.js";
import { AddNewProject } from "./addProject.js";
import { renderProjects } from "./renderProjects.js";


const addProjectButton = document.getElementById("addProjectButton");

addProjectButton.addEventListener("click", openProjectModal);

const projectNameInput = document.getElementById("projectNameInput");
const addProject = document.getElementById("addProject");
addProject.addEventListener("click", () => {
    let newProject = projectNameInput.value;
    newProject = new AddNewProject(newProject)
    projectNameInput.value = "";
    renderProjects();

})

renderProjects();


//Opening task modal

const addTaskModal = document.getElementById("addTaskModal");
const addTaskButton = document.getElementById("addTaskButton");
const cancelTask = document.getElementById("cancelTask");

addTaskButton.addEventListener("click", () => {
    addTaskModal.showModal();
})

cancelTask.addEventListener("click", () => {
    addTaskModal.close();
})