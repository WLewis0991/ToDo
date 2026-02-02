// src/index.js
import "./styles.css";
import { openProjectModal } from "./addProject.js";

const addProjectButton = document.getElementById("addProjectButton");

addProjectButton.addEventListener("click", openProjectModal);

const projects = JSON.parse(localStorage.getItem("projects")) || [];

function AddNewProject (name) {
    this.name = name;
    this.tasks = [];

    projects.push(this);
    localStorage.setItem("projects", JSON.stringify(projects))
}

const projectNameInput = document.getElementById("projectNameInput");
const addProject = document.getElementById("addProject");
addProject.addEventListener("click", () => {
    let newProject = projectNameInput.value;
    newProject = new AddNewProject(newProject)

})