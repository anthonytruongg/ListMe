
// const modal = document.querySelector('.modal');
// const trigger = document.querySelector('.addTask');
// const closeButton = document.querySelector('.close-button');

// function toggleModal() {
//     modal.classList.toggle('show-modal');
// }

// function windowOnClick(event) {
//     if (event.target === modal) {
//         toggleModal();
//     }
// }

// trigger.addEventListener('click', toggleModal);
// closeButton.addEventListener('click', toggleModal);
// window.addEventListener('click', windowOnClick);



function createListForm() {
    const modal = document.querySelector('.modal');
    const trigger = document.querySelector('.addTask');
    const closeButton = document.querySelector('.close-button');
    
    function toggleModal() {
        modal.classList.toggle('show-modal');
    }
    
    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }
    
    trigger.addEventListener('click', toggleModal);
    closeButton.addEventListener('click', toggleModal);
    window.addEventListener('click', windowOnClick);
}

export default createListForm;