// src/index.js
import "./styles.css";
import { openProjectModal } from "./openProjectModule.js";
import { AddNewProject } from "./addProject.js";
import { projects } from "./storage.js";


const addProjectButton = document.getElementById("addProjectButton");

addProjectButton.addEventListener("click", openProjectModal);

const projectNameInput = document.getElementById("projectNameInput");
const addProject = document.getElementById("addProject");
addProject.addEventListener("click", () => {
    let newProject = projectNameInput.value;
    newProject = new AddNewProject(newProject)
})

projects.forEach (project => {
    const projectList = document.getElementById("projectList");
    const projectItem = document.createElement("li");
    projectItem.innerText = project.name;
    projectList.appendChild(projectItem);

})
