export {openProjectModal}; 
 

function openProjectModal(){   
    const projectModal = document.getElementById("addProjectModal");
    const addProject = document.getElementById("addProject");
    const cancelProject = document.getElementById("cancelProject");
    const projectNameInput = document.getElementById("projectNameInput");

    projectModal.showModal();

    addProject.addEventListener("click", () => {
        projectModal.close();
    })

    cancelProject.addEventListener("click", () => {
        projectNameInput.value="";
        projectModal.close();
    })
}