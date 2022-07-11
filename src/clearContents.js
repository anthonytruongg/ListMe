function clearContents() {
    const containerTwo = document.querySelector('.containerTwo');
    containerTwo.innerHTML = '';
    
    const container = document.querySelector('.container');
    container.removeChild(containerTwo);

    return container
}

export default clearContents;