
import { 
    toggleModal,
    windowOnClick, 
    createTask,
    toggleNav, 
} from './toggleForm';

function createListForm() {
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
    // TOGGLING TASK CONTENTS
    
    // -------------------------------------------
    // TOGGLING SIDE NAV BAR
    const menu = document.querySelector('.menuButton');
    menu.addEventListener('click', toggleNav);
}

export default createListForm;