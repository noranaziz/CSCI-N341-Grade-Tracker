// function when moving to another page
function move(destination) {
    // array of students
    const students = ['Mina Abdelmalek', 'Nabila Abdoulkadri', 'Ahmad Anbar', 'John Beanblossom', 'Dorian Bell II', 'Ethan Bose', 'Mason Coles', 'Oliver Cooksey', 'Sid Dineshkumar', 'Sriman Donthireddi', 'Ana Marija Duleva', 'Jenna Flannery', 'Marissa Ford', 'Corey Gaylord', 'Jacob Gibson', 'Karnveer Gill', 'Avery Gilstrap', 'Simon Greenaway', 'Andrew Hage', 'Ayddan Hartle', 'Noor Hassuneh', 'Solomon Haynes', 'Udantha Herath', 'Victor Ilemobayo', 'Rece Ille-Potter', 'Liam Issah', 'Jorge Jimenez', 'Yassir Khalaf', 'Skyler Kiefer', 'Austin Kitch', 'Nathan Kohlman', 'Benjamin Krohn', 'Kelly Kuhn', 'Logan Kurker', 'Jack Lazaro', 'John Leidy', 'Johnathan Leverenz', 'Dylan Manning', 'Evan Marsh', 'Jack McClanahan', 'Leo Morales', 'Wali Munir', 'Elhadji Ndoye', 'Daniel Park', 'Quinton Pedrick', 'Adolfo Pozos Garcia', 'Dylan Reid', 'Muhammad Rizwan', 'Jonathan Rodriguez', 'Manjot Singh', 'Parmindar Singh', 'Miyatah Singleton', 'Carson Strohm', 'Samuel Theising', 'Zach Ullom', 'Hannah Waterman', 'JT Wellspring', 'William Wilkerson', 'Justin Zhu']

    // initialize seed
    let seed;
    switch(destination) {
        case 'lab0.html':
            seed = 'lab0Seed'
            break;
        case 'lab1.html':
            seed = 'lab1Seed'
            break;
        case 'lab2.html':
            seed = 'lab2Seed'
            break;
        case 'lab3.html':
            seed = 'lab3Seed'
            break;
        case 'midterm.html':
            seed = 'midtermSeed'
            break;
        case 'lab4.html':
            seed = 'lab4Seed'
            break;
        case 'lab5.html':
            seed = 'lab5Seed'
            break;
        case 'final.html':
            seed = 'finalSeed'
            break;
        default:
            seed = 'defaultSeed'
            break
    }

    // shuffle array of students
    const shuffledStudents = shuffleArray(students, seed)

    // assign students to graders
    const assignments = assignGraders(shuffledStudents)

    // output assignments
    console.log(assignments)

    // redirect to destination page
    window.location.href = destination
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

    return assignments
}