// src/index.js
import "./styles.css";
import { openProjectModal } from "./openProjectModule.js";
import { AddNewProject } from "./addProject.js";
import { renderProjects, renderToDos, currentProject  } from "./renderProjects.js";
import { projects } from "./storage.js";





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


// Adding a task

function addTask(taskName, taskDescription, taskDueDate, taskPriority) {
  const newTask = {
    id: crypto.randomUUID(),
    name: taskName,
    description: taskDescription,
    dueDate: taskDueDate,
    priority: taskPriority
  };

  const project = projects.find(p => p.id === currentProject);

  if (!project) {
    console.error("No project selected");
    return;
  }

  project.tasks.push(newTask);
  localStorage.setItem("projects", JSON.stringify(projects));
  renderToDos();
}

