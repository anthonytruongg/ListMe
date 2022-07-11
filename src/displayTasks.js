import clearContents from "./clearContents";
import { taskArray } from "./toggleForm";
import { format, parseISO } from "date-fns";
import { filterTodayArray } from "./switchingTabs";

// This function reorganizes the tasks by date
export function printTodayArray() {
    console.log("PRINTING FILTERED TASKS")
    const mainBody = document.querySelector('.mainBody');

    filterTodayArray.forEach(task => {
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
