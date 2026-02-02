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

// task display test
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

    const taskDiv = document.createElement("div");
    taskDiv.id = "task";

    const taskNameDiv = document.createElement("div");
    taskNameDiv.innerText = taskName;

    const taskDescriptionDiv = document.createElement("div");
    taskDescriptionDiv.innerText = taskDescription;

    const taskDueDateDiv = document.createElement("div");
    taskDueDateDiv.innerText = `Due Date: ${taskDueDate}`;

    const taskPriorityDiv = document.createElement("div");
    taskPriorityDiv.innerText = `Priority: ${taskPriority}`;

    taskDiv.appendChild(taskNameDiv);
    taskDiv.appendChild(taskDescriptionDiv);
    taskDiv.appendChild(taskDueDateDiv);
    taskDiv.appendChild(taskPriorityDiv);

    tasklist.appendChild(taskDiv);

    taskNameInput.value = "";
    taskDescriptionInput.value = "";
    taskDueDateInput.value = "";
    priorityOptions.forEach(option => option.checked = false);

    addTaskModal.close();

})
