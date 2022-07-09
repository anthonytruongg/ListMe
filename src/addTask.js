const addList = document.querySelector('.addList');
addList.addEventListener('click', addTask);


function addTask(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
}
