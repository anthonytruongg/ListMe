export function clearContents() {
    const mainBody = document.querySelector('.mainBody');
    mainBody.innerHTML = '';

    console.log("Switching Pages")
    console.log("Clearing Contents of MainBody")
}

export function clearProjectContents() {
    const projectModalContent = document.querySelector('.projectModal-content');
    projectModalContent.innerHTML = '';
}
