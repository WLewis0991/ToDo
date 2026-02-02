import { projects } from "./storage.js";

export { renderProjects };

function renderProjects(){
    const projectList = document.getElementById("projectList");
    projectList.innerHTML = "";
    projects.forEach (project => {
    const projectItem = document.createElement("li");
    projectItem.innerText = project.name;
    projectList.appendChild(projectItem);
})
};