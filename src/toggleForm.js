import task from "./taskDetails";

export function toggleModal() {
    const modal = document.querySelector('.modal');
    modal.classList.toggle('show-modal');
}
export function windowOnClick(event) {
    const modal = document.querySelector('.modal');
    const addButton = document.querySelector('.submit');

    if (event.target === modal || event.target === addButton) {
        toggleModal();
    }
}

const mainBody = document.querySelector('.mainBody');
const taskArray = [];

export function createTask(e) {
    
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