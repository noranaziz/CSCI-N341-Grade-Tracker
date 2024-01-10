// function when moving to another page
function callAll() {
    // get current file name from URL
    const currentFileName = getCurrentFileName() || 'default.html'
    const currentPageName = getCurrentFileName().split('.')[0]
    
    // get seed from file name
    let seed = inferDestination(currentFileName)
    console.log(seed)
    
    // array of students
    const students = ['Mina Abdelmalek', 'Nabila Abdoulkadri', 'Ahmad Anbar', 'John Beanblossom', 'Dorian Bell II', 'Ethan Bose', 'Mason Coles', 'Oliver Cooksey', 'Sid Dineshkumar', 'Sriman Donthireddi', 'Ana Marija Duleva', 'Jenna Flannery', 'Marissa Ford', 'Corey Gaylord', 'Jacob Gibson', 'Karnveer Gill', 'Avery Gilstrap', 'Simon Greenaway', 'Andrew Hage', 'Ayddan Hartle', 'Noor Hassuneh', 'Solomon Haynes', 'Udantha Herath', 'Victor Ilemobayo', 'Rece Ille-Potter', 'Liam Issah', 'Jorge Jimenez', 'Yassir Khalaf', 'Skyler Kiefer', 'Austin Kitch', 'Nathan Kohlman', 'Benjamin Krohn', 'Kelly Kuhn', 'Logan Kurker', 'Jack Lazaro', 'John Leidy', 'Johnathan Leverenz', 'Dylan Manning', 'Evan Marsh', 'Jack McClanahan', 'Leo Morales', 'Wali Munir', 'Elhadji Ndoye', 'Daniel Park', 'Quinton Pedrick', 'Adolfo Pozos Garcia', 'Dylan Reid', 'Muhammad Rizwan', 'Jonathan Rodriguez', 'Manjot Singh', 'Parmindar Singh', 'Miyatah Singleton', 'Carson Strohm', 'Samuel Theising', 'Zach Ullom', 'Hannah Waterman', 'JT Wellspring', 'William Wilkerson', 'Justin Zhu']

    // shuffle array of students
    const shuffledStudents = shuffleArray(students, seed)

    // assign students to graders
    const assignments = assignGraders(shuffledStudents)

    // display table
    displayAssignments(assignments)

    // apply random pastel color
    applyRandomPastel(currentPageName)

    console.log(document.getElementById('lab0'))
}

// function to get the current file name from the URL
function getCurrentFileName() {
    const pathArray = window.location.pathname.split('/')
    return pathArray[pathArray.length - 1]
}

// function to infer destination based on the file name
function inferDestination(fileName) {
    switch(fileName) {
        case 'lab0.html':
            return 'lab0Seed'
        case 'lab1.html':
            return 'lab1Seed'
        case 'lab2.html':
            return 'lab2Seed'
        case 'lab3.html':
            return 'lab3Seed'
        case 'midterm.html':
            return 'midtermSeed'
        case 'lab4.html':
            return 'lab4Seed'
        case 'lab5.html':
            return 'lab5Seed'
        case 'final.html':
            return 'finalSeed'
        default:
            return 'defaultSeed'
    }
}

// function to shuffle an array randomly
function shuffleArray(array, seed) {
    // generate seed
    const random = new Math.seedrandom(seed)

    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(random() * (i + 1))

        // swap
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

// function to assign graders to students
function assignGraders(students) {
    // array of graders
    const graders = ['Noran', 'Laurie', 'Sravani']

    // assignments
    const assignments = {};

    // assign a student to a grader
    students.forEach((student, index) => {
        const graderIndex = index % graders.length
        const grader = graders[graderIndex]

        assignments[student] = grader
    })

    // sort assignments alphabetically by student name
    const sortedAssignments = Object.fromEntries(
        Object.entries(assignments).sort(([a], [b]) => a.localeCompare(b))
    )

    return sortedAssignments
}

// function to display assignments as table
function displayAssignments(assignments) {
    const tableContainer = document.getElementById('table')

    // check if tableContainer exists
    if(tableContainer) {
        const graders = ['Noran', 'Laurie', 'Sravani']

        // create a table with 3 columns
        const table = document.createElement('table')
        table.classList.add('assignments-table')

        graders.forEach((grader, index) => {
            if(index % 3 == 0) {
                // create a new row for every 3 graders
                const row = table.insertRow()
            }

            // create a cell for each grader
            const cell = table.rows[table.rows.length - 1].insertCell()
            cell.innerHTML = `<strong>${grader}</strong>`

            // add students below each grader as buttons
            for(const student in assignments) {
                if(assignments[student] == grader) {
                    const studentButton = document.createElement('button')
                    studentButton.innerHTML = student

                    studentButton.addEventListener('click', () => {
                        // change background color on button click
                        if(studentButton.style.backgroundColor == 'lightblue') {
                            studentButton.style.backgroundColor = '' // reset color
                        } else {
                            studentButton.style.backgroundColor = 'lightblue'
                        }
                    })
                    cell.appendChild(studentButton)
                }
            }
        })

        tableContainer.appendChild(table)
    } else {
        console.error("table container not found")
    }
}

// function to generate random pastel color
function generatePastel() {
    const hue = Math.floor(Math.random() * 360)
    const saturation = Math.floor(Math.random() * 30) + 70 // keep saturation between 70% and 100%
    const lightness = Math.floor(Math.random() * 20) + 70 // keep lightness between 70% and 90%

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

// function to get or generate a random pastel color based on the current page and store it in localStorage
export function getOrCreatePastel(pageName) {
    // construct a unique key for each page
    const storageKey = `pastelColor_${pageName}`

    // check if color is already stored in localStorage for this page
    const storedColor = localStorage.getItem(storageKey)

    if(storedColor) {
        return storedColor
    } else {
        // generate new color
        const newColor = generatePastel()

        // store new color in localStorage
        localStorage.setItem(storageKey, newColor)

        return newColor
    }
}

// apply random pastel color to all buttons
function applyRandomPastel(pageName) {
    const pastelColor = getOrCreatePastel(pageName)

    // get all buttons on the page
    const buttons = document.querySelectorAll('button')

    // apply color to each button
    buttons.forEach((button) => {
        button.style.backgroundColor = pastelColor
    })
}