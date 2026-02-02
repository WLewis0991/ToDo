import { projects } from "./storage.js";

export { renderProjects, currentProject, renderToDos};

function renderProjects(){
    const projectList = document.getElementById("projectList");
    projectList.innerHTML = "";
    projects.forEach (project => {
    const projectItem = document.createElement("li");
    projectItem.addEventListener ("click", renderToDos);
    projectItem.datasetid = project.id;
    projectItem.innerText = project.name;
    projectList.appendChild(projectItem);
})
};

let currentProject = null;

function renderToDos () {
    const taskList = document.getElementById("taskList");
    currentProject = this.datasetid;
    taskList.innerHTML = "";
    console.log(currentProject);
}
