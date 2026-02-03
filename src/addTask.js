import { projects } from "./storage.js";
import { currentProject, renderToDos } from "./renderProjects.js";

export {addTask}


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
