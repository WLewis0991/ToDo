import { projects } from "./storage.js";

export { renderProjects, renderToDos, currentProject };

function renderProjects() {
  const projectList = document.getElementById("projectList");
  projectList.innerHTML = "";

  projects.forEach(proj => {
    const projectItem = document.createElement("li");
    projectItem.dataset.id = proj.id;
    projectItem.innerText = proj.name;

    projectItem.addEventListener("click", renderToDos);

    const deleteProjectButton = document.createElement("button");
    deleteProjectButton.id = "deleteProject";
    deleteProjectButton.innerText = "X";

 deleteProjectButton.addEventListener("click", (e) => {
  e.stopPropagation();

  const index = projects.findIndex(p => p.id === proj.id);
  if (index !== -1) {
    projects.splice(index, 1);
  }

  localStorage.setItem("projects", JSON.stringify(projects));
  renderProjects();
});
    projectItem.appendChild(deleteProjectButton);
    projectList.appendChild(projectItem);
  });
}


let currentProject = null;


// Rendering ToDos for the current project
function renderToDos(e) {
  if (e) {
    currentProject = e.currentTarget.dataset.id;
  }

  const taskList = document.getElementById("taskList");
  const project = projects.find(p => p.id === currentProject);

  if (!project) return;

  const currentProjectTitle = document.getElementById("currentProjectTitle")

  currentProjectTitle.innerText = "";
  currentProjectTitle.innerText = `Current Project: ${project.name}`;

  taskList.innerHTML = "";

  project.tasks.forEach(task => {
    const taskDiv = document.createElement("div");
    taskDiv.id = "task";

    const taskNameDiv = document.createElement("h4");
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





