import { printOriginalArray, printPrioritizeTasks, printTodayArray } from "./displayTasks";
import { windowOnClickProject, toggleProjectModal } from "./taskFunctions";
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
    const projectModal = document.createElement('div');
    projectModal.classList.add('projectModal');
    projectModal.innerHTML = `
        <div class="projectModal-content">
            <span class="close-button">&times;</span>
            <h2>Formulate Code Project</h2>
            <p>Tasks to be completed:</p>
            <div class="projectItem">
                <h3>Task 1</h3>
            </div>
            <div class="projectItem">
                <h3>Task 2</h3>
            </div>
            <div class="projectItem">
                <h3>Task 3</h3>
            </div>
            <div class="projectItem">
                <h3>Task 4</h3>
            </div>
        </div>
        
        `;
    mainBody.appendChild(projectModal);

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
