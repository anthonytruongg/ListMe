import { task, project } from "./constructors";
import { format, parseISO } from "date-fns";
import { clearProjectContents } from "./clearContents";
// --------------------------------------------------
// Modal Toggle Functions
export function toggleModal() {
    const modal = document.querySelector('.modal');
    modal.classList.toggle('show-modal');
}
export function toggleProjectModal(){
    const modal = document.querySelector('.projectModal');
    modal.classList.toggle('show-projectModal');
}
export function toggleAddProjectModal() {
    const modal = document.querySelector('.addProjectModal');
    modal.classList.toggle('show-addProjectModal');
}
// --------------------------------------------------
// Window click events
export function windowOnClickProject(event) {
    const modal = document.querySelector('.projectModal');
    const modalTwo = document.querySelector('.addProjectModal');
    if (event.target === modal) {
        toggleProjectModal();
    }
    if (event.target === modalTwo) {
        toggleAddProjectModal();
    }
}
export function windowOnClick(event) {
    const modal = document.querySelector('.modal');
    const addButton = document.querySelector('.submit');

    if (event.target === modal || event.target === addButton) {
        toggleModal();
    }
}
// --------------------------------------------------
// Array (currently contains sample tasks)
const mainBody = document.querySelector('.mainBody');

export const taskArray = [];

export const projectArray = [];

// --------------------------------------------------
// Create Task Functions
export function createTask(e) {

    e.preventDefault();
    const newTask = new task(
        document.getElementById('title').value,
        document.getElementById('description').value,
        document.getElementById('date').value,
        document.getElementById('priority').value,
        document.getElementById('projectOption').value
    );
    
    //-----------------------------------------------------
    taskArray.push(newTask);
    // --------------------------------------------------
    // Creating a new task div
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('item');
    const taskTitle = document.createElement('h1');
    const taskDate = document.createElement('p');
    const taskDescription = document.createElement('p');
    const taskProject = document.createElement('p');
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

        taskProject.textContent = 'Project: ' + task.project;
        taskDiv.appendChild(taskProject);

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
// --------------------------------------------------
// Creating Project
export function createProject(e) {
    const projectOption = document.getElementById("projectOption")
    e.preventDefault();

    const newProject = new project(
        document.getElementById('projectName').value,
        document.getElementById('projectDueDate').value,
    );

    projectArray.push(newProject);

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('projectContainer');

    const projectHeading = document.createElement('h2');
    const projectDueDate = document.createElement('h3')
    const option = document.createElement('option');
    option.classList.add('optionDropDown');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteProject');

    projectArray.forEach(project => {
        option.setAttribute('id', project.id);
        option.textContent = project.name;
        projectOption.appendChild(option);

        localStorage.setItem(project.id, JSON.stringify(project.name));

        projectContainer.setAttribute('id', project.id);
        projectHeading.textContent = project.name;
        projectContainer.appendChild(projectHeading);

        const projectDateFormat = format(parseISO(project.date), 'MM/dd/yyyy');
        projectDueDate.textContent = 'Due Date: ' + projectDateFormat;
        projectContainer.appendChild(projectDueDate);

        deleteButton.textContent = 'X';
        projectContainer.appendChild(deleteButton);

        mainBody.appendChild(projectContainer);
    })
    document.getElementById("projectForm").reset();
}
// --------------------------------------------------
// Toggle Nav Bar
export function toggleNav() {
    const sideNav = document.querySelector('.sideNav');
    sideNav.classList.toggle('sideNav-open');
}
// --------------------------------------------------
// Delete Task
export function removeTask(e) {
    const taskArray = JSON.parse(localStorage.getItem('taskArray'))

    const getTask = (id) => taskArray.find(task => task.id === id);
    const deleteTask = (id) => taskArray.splice(taskArray.indexOf(getTask(id)), 1);
    deleteTask(e.target.parentNode.id);
    // RESETTING LOCAL STORAGE

    localStorage.setItem("taskArray", JSON.stringify(taskArray));

}
// --------------------------------------------------
// REMOVING PROJECTS
export function removeProject(e) {
    clearProjectContents();
    const projectArray = JSON.parse(localStorage.getItem('projectArray'))

    const getProject = (id) => projectArray.find(project => project.id === id);
    const deleteProject = (id) => projectArray.splice(projectArray.indexOf(getProject(id)), 1);
    deleteProject(e.target.parentNode.id);

    localStorage.setItem("projectArray", JSON.stringify(projectArray));
}
// --------------------------------------------------
// REMOVING PROJECT OPTIONS FROM DROPDOWN
export function removeProjectOption(e) {
    const projectOption = document.getElementById("projectOption")
    const option = document.querySelector(`option[id="${e.target.parentNode.id}"]`);
    projectOption.removeChild(option);
  

    const projectArray = JSON.parse(localStorage.getItem('projectArray'))
    projectArray.forEach(project => {
        if (project.id === e.target.parentNode.id) {
            window.localStorage.removeItem(project.id);
        }
    })
    localStorage.setItem("projectArray", JSON.stringify(projectArray));
}