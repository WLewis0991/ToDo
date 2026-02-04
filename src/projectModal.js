import { AddNewProject } from "./addProject.js";
import { renderProjects } from "./renderProjects.js";
import { openProjectModal } from "./openProjectModule.js";

export { projectModal };


function projectModal () {
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
}
