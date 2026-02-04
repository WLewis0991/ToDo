import { addTask } from "./addTask.js";

export {taskModal}  
  
  //Opening task modal
function taskModal () {
    const addTaskModal = document.getElementById("addTaskModal");
    const addTaskButton = document.getElementById("addTaskButton");
    const cancelTask = document.getElementById("cancelTask");

    addTaskButton.addEventListener("click", () => {
        addTaskModal.showModal();
    })

    cancelTask.addEventListener("click", () => {
        document.getElementById("addTaskForm").reset();
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
        
        document.getElementById("addTaskForm").reset();

        addTaskModal.close();

    });
}