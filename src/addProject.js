import { projects } from "./storage.js";

export function AddNewProject (name) {
    this.name = name;
    this.tasks = [];
    this.id = crypto.randomUUID();

    projects.push(this);
    localStorage.setItem("projects", JSON.stringify(projects))
}

