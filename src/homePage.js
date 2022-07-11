export function createHomePage() {
    const containerTwo = document.createElement('div');
    containerTwo.classList.add('containerTwo');

    const mainHeading = document.createElement('h1');
    mainHeading.classList.add('mainHeading');
    mainHeading.textContent = 'My To Do List';
    containerTwo.append(mainHeading);

    const mainBody = document.createElement('div');
    mainBody.classList.add('mainBody');
    containerTwo.append(mainBody);

    document.querySelector('.container').append(containerTwo);
}

export function createInboxPage() {
    const containerTwo = document.createElement('div');
    containerTwo.classList.add('containerTwo');

    const mainHeading = document.createElement('h1');
    mainHeading.classList.add('mainHeading');
    mainHeading.textContent = 'Inbox';
    containerTwo.append(mainHeading);

    const mainBody = document.createElement('div');
    mainBody.classList.add('mainBody');
    containerTwo.append(mainBody);

    document.querySelector('.container').append(containerTwo);
}
