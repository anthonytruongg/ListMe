import { taskArray, projectArray, toggleProjectModal, viewProjectTasks } from "./taskFunctions";
import { format, parseISO } from "date-fns";

// --------------------------------------------------
// This function reorganizes the tasks by 
// cloning the array and sorting it by date
export function printTodayArray() {
    // This function formats 
    const todayDate = format(parseISO(new Date().toISOString()), "yyyy-MM-dd");
    const filteredDateArray = taskArray.filter(task => {
        return task.date === todayDate;
    })
    const mainBody = document.querySelector('.mainBody');
    // const taskDiv = document.createElement('div');
    // taskDiv.classList.add('item');

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


    console.log("PRINTING FILTERED TASKS")
    const mainBody = document.querySelector('.mainBody');
    // const taskDiv = document.createElement('div');
    // taskDiv.classList.add('item');

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
    const projectOption = document.getElementById('projectOption');
    projectArray.forEach(project => {
        
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('projectContainer');

        const projectHeading = document.createElement('h2');
        const projectDueDate = document.createElement('h3')

        // creates project values for tasks
        // const option = document.createElement('option');
        // option.value = project.id;
        // option.textContent = project.name;
        // projectOption.appendChild(option);

        projectContainer.setAttribute('id', project.id);
        projectHeading.textContent = project.name;
        projectContainer.appendChild(projectHeading);

        const projectDateFormat = format(parseISO(project.date), 'MM/dd/yyyy');
        projectDueDate.textContent = 'Due Date: ' + projectDateFormat;
        projectContainer.appendChild(projectDueDate);

        // testing to see if clicking projects will open
        // projectContainer.addEventListener('click', () => {
        //     console.log("Clicking project" + project.id)
        //     toggleProjectModal(project.id)
        //     // viewProjectTasks(project.id)
        // })


        mainBody.appendChild(projectContainer);
    })
}
