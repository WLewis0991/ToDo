// src/index.js
import "./styles.css";
import { openProjectModal } from "./openProjectModule.js";
import { AddNewProject } from "./addProject.js";
import { renderProjects, currentProject } from "./renderProjects.js";
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
    addTask(taskName, taskDescription, taskDueDate, taskPriority)

    addTaskModal.close();

})



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

function renderToDos() {
  const taskList = document.getElementById("taskList");
  const project = projects.find(p => p.id === currentProject);

  if (!project) return;

  taskList.innerHTML = "";

  project.tasks.forEach(task => {
    const taskDiv = document.createElement("div");
    taskDiv.id = "task";

    const taskNameDiv = document.createElement("div");
    taskNameDiv.id = "taskName";
    taskNameDiv.innerText = task.name;

    const taskDescriptionDiv = document.createElement("div");
    taskDescriptionDiv.id = "taskDescription";
    taskDescriptionDiv.innerText = task.description;

    const taskDueDateDiv = document.createElement("div");
    taskDueDateDiv.id = "taskDueDate";
    taskDueDateDiv.innerText = `Due Date: ${task.dueDate}`;

    const taskPriorityDiv = document.createElement("div");
    taskPriorityDiv.id = "taskPriority";
    taskPriorityDiv.innerText = `Priority: ${task.priority}`;

    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.id = "deleteTaskButton";
    deleteTaskButton.innerText = "X";
    deleteTaskButton.addEventListener("click", () => {
      project.tasks = project.tasks.filter(t => t.id !== task.id);
      localStorage.setItem("projects", JSON.stringify(projects));
      renderToDos();
    });

    

    taskDiv.append(
      taskNameDiv,
      taskDescriptionDiv,
      taskDueDateDiv,
      taskPriorityDiv,
      deleteTaskButton
    );

    taskList.appendChild(taskDiv);
  })};
