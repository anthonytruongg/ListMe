import task from "./taskDetails";
import { format, parseISO } from "date-fns";

export function toggleModal() {
    const modal = document.querySelector('.modal');
    modal.classList.toggle('show-modal');
}
export function toggleProjectModal(){
    const modal = document.querySelector('.projectModal');
    modal.classList.toggle('show-projectModal');
}
export function windowOnClickProject(event) {
    const modal = document.querySelector('.projectModal-content');

    if (event.target === modal) {
        toggleProjectModal();
    }
}
export function windowOnClick(event) {
    const modal = document.querySelector('.modal');
    const addButton = document.querySelector('.submit');

    if (event.target === modal || event.target === addButton) {
        toggleModal();
    }
}
const mainBody = document.querySelector('.mainBody');
export const taskArray = [ 
    new task('Task 1', 'This is a task', '2022-08-04', '1'),
    new task('Task 2', 'This is a task', '2022-07-23', '2'),
    new task('Task 3', 'This is a task', '2022-07-12', '3'),
    new task('Task 4', 'This is a task', '2022-07-11', '4'),
];
// creating a task
export function createTask(e) {
    if (document.getElementById('date').value === '') {
        alert('Please enter a date')
    }
        
    e.preventDefault();
    
    const newTask = new task(
        document.getElementById('title').value,
        document.getElementById('description').value,
        document.getElementById('date').value,
        document.getElementById('priority').value
    );
    
    taskArray.push(newTask);

    // KEEPING TRACK OF ARRAY
    console.log(taskArray);
    // Creating a new task div
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('item');
    const taskTitle = document.createElement('h1');
    const taskDate = document.createElement('p');
    const taskDescription = document.createElement('p');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');

    // Setting attributes to the task div
    taskArray.forEach(task => {
        taskDiv.setAttribute('id', task.id);
        taskTitle.textContent = task.title;
        taskDiv.appendChild(taskTitle);

        deleteButton.textContent = 'X';
        taskDiv.appendChild(deleteButton);
        
        taskDescription.textContent = 'Details: ' + task.description;
        taskDiv.appendChild(taskDescription);

        const dateFormat = format(parseISO(task.date), 'MM/dd/yyyy');
        taskDate.textContent = 'Due Date: ' + dateFormat;
        taskDiv.appendChild(taskDate);

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
    document.getElementById("taskForm").reset();
}

export function toggleNav() {
    const sideNav = document.querySelector('.sideNav');
    sideNav.classList.toggle('sideNav-open');
}

export function removeTask(e) {
    const getTask = (id) => taskArray.find(task => task.id === id);
    const deleteTask = (id) => taskArray.splice(taskArray.indexOf(getTask(id)), 1);
    deleteTask(e.target.parentNode.id);

    console.log("REMOVING TASK");
}