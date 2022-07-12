import { printOriginalArray, printPrioritizeTasks, printTodayArray } from "./displayTasks";

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
export function createProjectPage() {
    const mainHeading = document.querySelector('.mainHeading');
    mainHeading.textContent = 'Projects';
    const mainBody = document.querySelector('.mainBody');


    const projectContainer = document.createElement('div');
    projectContainer.classList.add('projectContainer');
    mainBody.appendChild(projectContainer);

    const projectHeading = document.createElement('h2');
    projectHeading.textContent = 'Formulate Code Project';
    projectContainer.appendChild(projectHeading);


}
// --------------------------------------------------
// PRIORITY PAGE
export function createPriorityPage() {
    const mainHeading = document.querySelector('.mainHeading');
    mainHeading.textContent = 'Priority';
    printPrioritizeTasks();
}
