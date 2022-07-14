
import { 
    toggleModal,
    windowOnClick, 
    createTask,
    toggleNav, 
    removeTask,
    createProject,
    toggleAddProjectModal,
    toggleProjectModal,
    viewProjectTasks,
} from './taskFunctions';

import {
    createInboxPage, 
    createHomePage,
    createTodayPage,
    createProjectPage,
    createPriorityPage,
} from './switchingTabs';

import { clearContents, clearProjectContents } from './clearContents';

import { projectArray } from './taskFunctions';
import { format, parseISO } from "date-fns";


function DOMevents() {
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
        }
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
        }
    });
    // -------------------------------------------
    // VIEWING PROJECTS
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('projectContainer')){
            projectArray.forEach(project => {
                if (e.target.id === project.id) {
                    clearProjectContents();
                    toggleProjectModal();
                    console.log("Clicking project" + project.id)
                    const projectModalContent = document.querySelector('.projectModal-content');

                    const projectHeading = document.createElement('h1');
                    projectHeading.setAttribute('class', 'mainHeading');
                    projectModalContent.appendChild(projectHeading);
                    const projectDate = document.createElement('h2');
                    projectDate.setAttribute('class', 'projectDate');
                    projectModalContent.appendChild(projectDate);

                
                    projectHeading.textContent = project.name;
                    const projectDateFormat = format(parseISO(project.date), 'MM/dd/yyyy');
                    projectDate.textContent = 'Due Date: ' + projectDateFormat;
                }
        })
        }
    });
       
    // -------------------------------------------
    // REMOVING TASKS
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete')) {
            removeTask(e);
            let theButton = e.target;
            let theTask = theButton.parentNode;
            theTask.remove();
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