// function when moving to another page
function callAll() {
    // get current file name from URL
    const currentFileName = getCurrentFileName() || 'default.html'
    
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
    displayAssignments(assignments, destination)

    console.log(destination)
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

// 

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
function displayAssignments(assignments, destination) {
    const tableContainer = document.getElementById('lab0-table')


    // check if current page is one of the destination pages
    if(tableContainer) {
        tableContainer.innerHTML = '<h2>Assignments</h2>'

        const table = document.createElement('table')
        const graders = ['Noran', 'Laurie', 'Sravani']

        // table header (outputs names of graders)
        const headerRow = table.insertRow()
        headerRow.insertCell(0) // empty cell for spacing
        graders.forEach((grader, index) => {
            const headerCell = headerRow.insertCell(index + 1)
            headerCell.innerHTML = `<strong>${grader}</strong>`
        })

        // position the table with assignment data
        for(const student in assignments) {
            const rowIndex = table.rows.length
            const row = table.insertRow(rowIndex)

            // first cell for student name
            const studentCell = row.insertCell(0)
            studentCell.innerHTML = student

            // cells for grader assignments
            graders.forEach((grader, index) => {
                const graderCell = row.insertCell(index + 1)
                graderCell.innerHTML = assignments[student] === grader ? 'Assigned' : ''
            })
        }

        tableContainer.appendChild(table)
    } else {
        console.error("table container not found")
    }
}