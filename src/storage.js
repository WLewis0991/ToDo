//Storage of Projects and the tasks tied to them

export const projects = JSON.parse(localStorage.getItem("projects")) || [];

if (projects.length === 0) {
    projects.push({
        id: crypto.randomUUID(),
        name: "Getting Started",
        tasks: [
            {
                id: crypto.randomUUID(),
                title: "Welcome to your To-Do App",
                description: "This is a sample task",
                dueDate: "",
                priority: "Low",
                
            },
            {
                id: crypto.randomUUID(),
                title: "Add your first task",
                description: "Click the Add Task button",
                dueDate: "",
                priority: "Medium",
               
            }
        ]
    });

    localStorage.setItem("projects", JSON.stringify(projects));
}