// src/index.js
import "./styles.css";
import { openProjectModal } from "./openProjectModule.js";
import { AddNewProject } from "./addProject.js";
import { renderProjects} from "./renderProjects.js";
import { addTask } from "./addTask.js";





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

// Adding a new task 
const tasklist = document.getElementById("taskList");
const addNewTask = document.getElementById("addTask");

addNewTask.addEventListener("click", () => {
    const taskName = document.getElementById("taskNameInput").value;
    const taskDescription = document.getElementById("taskDescriptionInput").value;
    const taskDueDate = document.getElementById("taskDueDateInput").value;
    const priorityOptions = document.getElementsByName("priority");
    let taskPriority = "Low"; // Default priority
    for (const option of priorityOptions) {
        if (option.checked) {
            taskPriority = option.value;
            break;
        }   
    }
    addTask(taskName, taskDescription, taskDueDate, taskPriority)

    addTaskModal.close();

})



