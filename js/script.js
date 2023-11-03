function select(event) {
    document.querySelector('span').textContent = `${event.target.value}: `
    console.log(event.target.value)
}