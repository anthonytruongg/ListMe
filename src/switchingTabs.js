import { printOriginalArray, printPrioritizeTasks, printTodayArray } from "./displayTasks";
import { windowOnClickProject, toggleProjectModal, toggleAddProjectModal } from "./taskFunctions";
// --------------------------------------------------
// HOME PAGE
export function createHomePage() {
    const mainHeading = document.querySelector('.mainHeading');
    mainHeading.textContent = 'My To Do List';
    printOriginalArray();
}
// --------------------------------------------------
// INBOX PAGE
export function createInboxPage() {
    const mainHeading = document.querySelector('.mainHeading');
    mainHeading.textContent = 'Inbox';
    printOriginalArray();
}
// --------------------------------------------------
// TODAY PAGE
export function createTodayPage() {
    const mainHeading = document.querySelector('.mainHeading');
    mainHeading.textContent = "Today's To Do List";
    printTodayArray();
}
// --------------------------------------------------
// PROJECT PAGE - STILL NEED TO WORK ON THIS
// NEED TO ADD FUNCTIONALITY TO ADD PROJECTS
export function createProjectPage() {
    
    const mainHeading = document.querySelector('.mainHeading');
    mainHeading.textContent = 'Projects';
    const mainBody = document.querySelector('.mainBody');
    const addProject = document.createElement('div');
    addProject.classList.add('addProject');
    addProject.textContent = 'Click to add a Project!';
    mainBody.appendChild(addProject);

    // -------------------------------------------
    // THIS IS THE PROJECT ITEM
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('projectContainer');
    mainBody.appendChild(projectContainer);
    // THIS IS THE NAME OF THE PROJECT
    const projectHeading = document.createElement('h2');
    projectHeading.textContent = 'Formulate Code Project';
    projectContainer.appendChild(projectHeading);
    // THIS IS THE DETAILS + TASKS OF THE PROJECT

    addProject.addEventListener('click', () => {
        console.log("PROJECT MODAL OPEN")
        toggleAddProjectModal();
    });
    
    // -------------------------------------------
    projectContainer.addEventListener('click', toggleProjectModal);
    window.addEventListener('click', windowOnClickProject);

}
// --------------------------------------------------
// PRIORITY PAGE
export function createPriorityPage() {
    const mainHeading = document.querySelector('.mainHeading');
    mainHeading.textContent = 'Priority';
    printPrioritizeTasks();
}
