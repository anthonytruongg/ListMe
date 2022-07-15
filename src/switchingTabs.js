import { printOriginalArray, printPrioritizeTasks, printProjectArray, printTodayArray } from "./displayTasks";
import { windowOnClickProject, toggleAddProjectModal } from "./taskFunctions";
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
    printProjectArray();
    
    addProject.addEventListener('click', () => {
        //console.log("PROJECT MODAL OPEN")
        toggleAddProjectModal();
    });
   
    window.addEventListener('click', windowOnClickProject);
}
// --------------------------------------------------
// PRIORITY PAGE
export function createPriorityPage() {
    const mainHeading = document.querySelector('.mainHeading');
    mainHeading.textContent = 'Priority';
    printPrioritizeTasks();
}
