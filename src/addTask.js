
import { 
    toggleModal,
    windowOnClick, 
    createTask,
    toggleNav, 
    removeTask,
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
}

export default createListForm;