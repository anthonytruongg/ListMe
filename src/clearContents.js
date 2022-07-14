export function clearContents() {
    // const containerTwo = document.querySelector('.containerTwo');
    // containerTwo.innerHTML = '';
    
    // const container = document.querySelector('.container');
    // container.removeChild(containerTwo);

    // return container

    const mainBody = document.querySelector('.mainBody');
    mainBody.innerHTML = '';

    console.log("Switching Pages")
    console.log("Clearing Contents of MainBody")
}

export function clearProjectContents() {
    const projectModalContent = document.querySelector('.projectModal-content');
    projectModalContent.innerHTML = '';
}