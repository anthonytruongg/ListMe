import { taskArray, projectArray, toggleProjectModal } from "./taskFunctions";
import { format, parseISO } from "date-fns";
import { clearProjectContents } from "./clearContents";


// --------------------------------------------------
// IMPORTING DATA FROM LOCAL STORAGE TO BE CREATED
// if (taskArray.length === 0) {
//     console.log("EMPTY")
// } else {
//     let retrieveData = JSON.parse(localStorage.getItem('newTask'));
//     taskArray.push(retrieveData)
// }

// --------------------------------------------------
// This function reorganizes the tasks by 
// cloning the array and sorting it by date
export function printTodayArray() {
    const todayDate = format(parseISO(new Date().toISOString()), "yyyy-MM-dd");
    const filteredDateArray = taskArray.filter(task => {
        return task.date === todayDate;
    })
    const mainBody = document.querySelector('.mainBody');
    
    filteredDateArray.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('item');
    
        const taskTitle = document.createElement('h1');
        const taskDate = document.createElement('p');
        const taskDescription = document.createElement('p');
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        
        taskDiv.setAttribute('id', task.id);
        taskTitle.textContent = task.title;
        taskDiv.appendChild(taskTitle);
    
        deleteButton.textContent = 'X';
        taskDiv.appendChild(deleteButton);
        
        taskDescription.textContent = 'Details: ' + task.description;
        taskDiv.appendChild(taskDescription);
    
        const dateFormat = format(parseISO(task.date), 'MM/dd/yy');
        taskDate.textContent = 'Due Date: ' + dateFormat;
        taskDate.style.fontSize = '1.5rem';
        taskDate.style.fontWeight = 'bold';
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
}
// --------------------------------------------------
// This function prints original task array
export function printOriginalArray() {
    console.log("PRINTING ORIGINAL ARRAY")
    const mainBody = document.querySelector('.mainBody');
    // --------------------------------------------------
    // IMPORTING DATA FROM LOCAL STORAGE TO BE CREATED
        // let retrieveData = JSON.parse(localStorage.getItem('newTask'));
        // console.log("PUSHING DATA",retrieveData)
        // taskArray.push(retrieveData)
    // --------------------------------------------------
    taskArray.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('item');
    
        const taskTitle = document.createElement('h1');
        const taskDate = document.createElement('p');
        const taskDescription = document.createElement('p');
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        
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

        const taskProject = document.createElement('p');
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
}
// --------------------------------------------------
// This function prioritizes tasks by cloning the array
// and sorting it by priority
export function printPrioritizeTasks() {
    const filteredPriorityArray = [...taskArray]
    
    filteredPriorityArray.sort(function(a,b) {
        return (a.priority - b.priority)
    }).reverse();

    const mainBody = document.querySelector('.mainBody');

    filteredPriorityArray.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('item');
    
        const taskTitle = document.createElement('h1');
        const taskDate = document.createElement('p');
        const taskDescription = document.createElement('p');
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        
        taskDiv.setAttribute('id', task.id);
        taskTitle.textContent = task.title;
        taskDiv.appendChild(taskTitle);
    
        deleteButton.textContent = 'X';
        taskDiv.appendChild(deleteButton);
        
        taskDescription.textContent = 'Details: ' + task.description;
        taskDiv.appendChild(taskDescription);
    
        const dateFormat = format(parseISO(task.date), 'MM/dd/yy');
        taskDate.textContent = 'Due Date: ' + dateFormat;
        taskDate.style.fontSize = '1.5rem';
        taskDate.style.fontWeight = 'bold';
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
}
// --------------------------------------------------
// This function prints the project array
export function printProjectArray() {
    const mainBody = document.querySelector('.mainBody');

    projectArray.forEach(project => {
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('projectContainer');

        const projectHeading = document.createElement('h2');
        const projectDueDate = document.createElement('h3')
        
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteProject');
        deleteButton.textContent = 'X';
        projectContainer.appendChild(deleteButton);

        projectContainer.setAttribute('id', project.id);
        projectHeading.textContent = project.name;
        projectContainer.appendChild(projectHeading);

        const projectDateFormat = format(parseISO(project.date), 'MM/dd/yyyy');
        projectDueDate.textContent = 'Due Date: ' + projectDateFormat;
        projectContainer.appendChild(projectDueDate);

        mainBody.appendChild(projectContainer);
    })
}
// --------------------------------------------------
// VIEWING PROJECT TASKS
export function viewProjectTasks(e) {
projectArray.forEach(project => {
    if (e.target.id === project.id) {
    clearProjectContents();
    toggleProjectModal();
    const projectModalContent = document.querySelector('.projectModal-content');

    const projectHeading = document.createElement('h1');
    projectHeading.setAttribute('class', 'mainHeading');
    projectModalContent.appendChild(projectHeading);
    const projectDate = document.createElement('h2');
    projectDate.setAttribute('class', 'projectModalDate');
    projectModalContent.appendChild(projectDate);

    taskArray.forEach(task => {
    if (task.project === project.name) {
        const projectItem = document.createElement('div');
        projectItem.classList.add('projectItem');
        projectItem.setAttribute('id', task.id);

        const projectTaskTitle = document.createElement('p');
        projectTaskTitle.setAttribute('class', 'projectTaskTitle');
        projectTaskTitle.textContent = task.title;
        projectItem.appendChild(projectTaskTitle);

        const projectItemDescription = document.createElement('p');
        projectItemDescription.setAttribute('class', 'projectDescription');
        projectItemDescription.textContent = task.description;
        projectItem.appendChild(projectItemDescription);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = '-';
        projectItem.appendChild(deleteButton);

        if (task.priority === "4") {
            projectItem.style.backgroundColor = '#f87171';
        } else if (task.priority === "3") {
            projectItem.style.backgroundColor = '#facc15';
        } else if (task.priority === "2") {
            projectItem.style.backgroundColor = '#34d399';
        } else if (task.priority === "1") {
            projectItem.style.backgroundColor = '#38bdf8';
        }

            projectModalContent.appendChild(projectItem);
        }
    })
    projectHeading.textContent = project.name;
    const projectDateFormat = format(parseISO(project.date), 'MM/dd/yyyy');
    projectDate.textContent = 'Due Date: ' + projectDateFormat;
    }
    })
}
       