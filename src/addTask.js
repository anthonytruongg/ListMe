
import { 
    toggleModal,
    windowOnClick, 
    createTask,
    toggleNav, 
    removeTask,
} from './toggleForm';

import {
    createInboxPage, 
    createHomePage,
    createTodayPage,
    createProjectPage,
} from './switchingTabs';

import clearContents from './clearContents';


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
    addButton.addEventListener('click', createTask);
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


}

export default DOMevents;