
import { 
    toggleModal,
    windowOnClick, 
    createTask,
    toggleNav, 
    removeTask,
    removeProject,
    createProject,
    toggleAddProjectModal,
    removeProjectOption,
} from './taskFunctions';

import {
    createInboxPage, 
    createHomePage,
    createTodayPage,
    createProjectPage,
    createPriorityPage,
} from './switchingTabs';

import { clearContents } from './clearContents';

import { viewProjectTasks, printProjectOptions } from './displayTasks';

import { taskArray, projectArray } from './taskFunctions';


function DOMevents() {
    // --------------------------------------------------
    // POP UP MODAL FORM
    const trigger = document.querySelector('.addTask');
    const closeButton = document.querySelector('.close-button');
   
    trigger.addEventListener('click', toggleModal);
    closeButton.addEventListener('click', toggleModal);
    window.addEventListener('click', windowOnClick);
    // -------------------------------------------
    // CREATING A TASK BOX
    const addButton = document.querySelector('.submit');
    addButton.addEventListener('click', function(e) {
        if (document.getElementById('date').value === '') {
            alert('Please enter a date')
        } else {
        createTask(e);
        // -------------------------------------------
        // SAVING DATA
        // checking to see if array in local storage is empty
        if (localStorage.getItem('taskArray') === null) {
            // if empty, then set the array
            localStorage.setItem('taskArray', JSON.stringify(taskArray));
        } else {
            // if not empty, then add to the array
            const existingStorage = localStorage.getItem('taskArray');
            const existingArray = JSON.parse(existingStorage);
            existingArray.push(taskArray[taskArray.length - 1]);
            localStorage.setItem('taskArray', JSON.stringify(existingArray));
        }
    }
        // -------------------------------------------
    });
    // -------------------------------------------
    // CREATING A PROJECT BOX
    const submitButton = document.querySelector('.submitProject');
    submitButton.addEventListener('click', function(e) {
        if (document.getElementById('projectName').value === '') {
            alert('Please enter a title')
        } else if (document.getElementById('projectDueDate').value === '') {
            alert('Please enter a due date')
        } else {
            createProject(e);
            toggleAddProjectModal();
            // -------------------------------------------
            // SAVING DATA
            // checking to see if array in local storage is empty
            if (localStorage.getItem('projectArray') === null) {
                // if empty, then set the array
                localStorage.setItem('projectArray', JSON.stringify(projectArray));
            } else {
                // if not empty, then add to the array
                const existingStorage = localStorage.getItem('projectArray');
                const existingArray = JSON.parse(existingStorage);
                existingArray.push(projectArray[projectArray.length - 1]);
                localStorage.setItem('projectArray', JSON.stringify(existingArray));
            }
        }
    });
    // -------------------------------------------
    // VIEWING PROJECTS
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('projectContainer')){
            viewProjectTasks(e);
        }
    })
    // -------------------------------------------
    // REMOVING TASKS
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete')) {
            removeTask(e);
            let theButton = e.target;
            let theTask = theButton.parentNode;
            theTask.remove();
            // removing data
        }
    });
    // -------------------------------------------
    // REMOVING PROJECTS
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('deleteProject')) {
            removeProjectOption(e);
            removeProject(e);
            let theButton = e.target;
            let theProject = theButton.parentNode;
            theProject.remove();
        } 
    });

    // -------------------------------------------
    // TOGGLING SIDE NAV BAR
    const menu = document.querySelector('.menuButton');
    menu.addEventListener('click', toggleNav);
    // -------------------------------------------
    // CREATING INBOX PAGE
    const inbox = document.getElementById('inbox');
    inbox.addEventListener('click', () => {
        clearContents();
        createInboxPage();
    });
    // -------------------------------------------
    // CREATING HOME PAGE
    const home = document.querySelector('.homeButton');
    home.addEventListener('click', () => {
        clearContents();
        createHomePage();
    });
    // -------------------------------------------
    // CREATING TODAY PAGE
    const today = document.getElementById('today');
    today.addEventListener('click', () => {
        clearContents();
        createTodayPage();
    });
    // -------------------------------------------
    // CREATING PROJECT PAGE
    const projects = document.getElementById('projects');
    projects.addEventListener('click', () => {
        clearContents();
        createProjectPage();
    });
    // -------------------------------------------
    // CREATING PRIORITY PAGE
    const priority = document.getElementById('priorityNav');
    priority.addEventListener('click', () => {
        clearContents();
        createPriorityPage();
    });


}

export default DOMevents;