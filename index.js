// function when moving to another page
function move(destination, event) {
    // prevent default
    event.preventDefault()

    // update page
    location.href = destination

    console.log(location.href)
}