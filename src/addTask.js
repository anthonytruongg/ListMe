import createTask from "./createTask";


function createListForm() {
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

    const addButton = document.querySelector('.submit');
    addButton.addEventListener('click', createTask);

    function createTask(e) {
       
        e.preventDefault();
        
        const item = document.createElement('div');
        item.classList.add('item');
        item.textContent = document.getElementById("title").value;
        
        const mainBody = document.querySelector('.mainBody');
        mainBody.appendChild(item);

        document.getElementById("taskForm").reset();
    }
}

export default createListForm;