
import clearContents from "./clearContents";
import { taskArray } from "./toggleForm";
import { format, parseISO } from "date-fns";
import { printOriginalArray, printTodayArray } from "./displayTasks";


export function createHomePage() {
    const mainHeading = document.querySelector('.mainHeading');
    mainHeading.textContent = 'My To Do List';
    printOriginalArray();

}

export function createInboxPage() {
    const mainHeading = document.querySelector('.mainHeading');
    mainHeading.textContent = 'Inbox';
    printOriginalArray();

}
export const filterTodayArray = [...taskArray]
export function createTodayPage() {

    const mainHeading = document.querySelector('.mainHeading');
    mainHeading.textContent = 'Today';
    clearContents();
    console.log("Cloned Filtered Array: ", filterTodayArray);

    filterTodayArray.sort(function(a,b) {
        return new Date(a.date) - new Date(b.date);
    })
    console.log("ORGANIZING TASKS ", taskArray);

    printTodayArray();
}

export function createProjectPage() {
    const mainHeading = document.querySelector('.mainHeading');
    mainHeading.textContent = 'Projects';
}
