import { projects } from "./storage.js";

export { renderProjects, currentProject };;

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

function renderToDos() {
    currentProject = this.datasetid;
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

    taskDiv.append(
      taskNameDiv,
      taskDescriptionDiv,
      taskDueDateDiv,
      taskPriorityDiv
    );

    taskList.appendChild(taskDiv);
})};

  // clear inputs AFTER rendering