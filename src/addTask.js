
import task from './taskDetails';

function createListForm() {
    // POP UP MODAL FORM
    const modal = document.querySelector('.modal');
    const trigger = document.querySelector('.addTask');
    const closeButton = document.querySelector('.close-button');
    function toggleModal() {
        modal.classList.toggle('show-modal');
    }
    function windowOnClick(event) {
        if (event.target === modal || event.target === addButton) {
            toggleModal();
        }
    }
    trigger.addEventListener('click', toggleModal);
    closeButton.addEventListener('click', toggleModal);
    window.addEventListener('click', windowOnClick);

    // -------------------------------------------
    // CREATING A TASK BOX
    const addButton = document.querySelector('.submit');
    addButton.addEventListener('click', createTask);

    const mainBody = document.querySelector('.mainBody');

    const taskArray = [];

    function createTask(e) {
        
        e.preventDefault();
        
        const newTask = new task(
            document.getElementById('title').value,
            document.getElementById('description').value,
            document.getElementById('date').value,
            document.getElementById('priority').value
        );
        
        taskArray.push(newTask);

        console.log(taskArray);

        const taskDiv = document.createElement('div');
        taskDiv.classList.add('item');

        const taskTitle = document.createElement('h1');
        const taskDate = document.createElement('p');
        const taskDescription = document.createElement('p');
        const taskPriority = document.createElement('p');


        taskArray.forEach(task => {
            taskTitle.textContent = task.title;
            taskDiv.appendChild(taskTitle);

            taskDate.textContent = task.date;
            taskDiv.appendChild(taskDate);

            taskDescription.textContent = task.description;
            taskDiv.appendChild(taskDescription);


            if (task.priority === "4") {
                taskDiv.style.backgroundColor = '#f87171';
            } else if (task.priority === "3") {
                taskDiv.style.backgroundColor = '#facc15';
            } else if (task.priority === "2") {
                taskDiv.style.backgroundColor = '#34d399';
            } else if (task.priority === "1") {
                taskDiv.style.backgroundColor = '#38bdf8';
            }
            mainBody.appendChild(taskDiv);
        })


        // toggles the full description of task
            

        document.getElementById("taskForm").reset();
    }

    // -------------------------------------------
    // TOGGLING TASK CONTENTS

    // -------------------------------------------
    // TOGGLING SIDE NAV BAR
   
    const menu = document.querySelector('.menuButton');
    menu.addEventListener('click', toggleNav);

    function toggleNav() {
        const sideNav = document.querySelector('.sideNav');
        sideNav.classList.toggle('sideNav-open');

    }
}

export default createListForm;