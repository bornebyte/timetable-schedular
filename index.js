let classes = [
    {
        "name": "011",
        "department": "CSE"
    },
    {
        "name": "012",
        "department": "CSE"
    },
    {
        "name": "113",
        "department": "Computer Science"
    },
    {
        "name": "114",
        "department": "AI ML"
    },
    {
        "name": "115",
        "department": "AI ML"
    },
    {
        "name": "215",
        "department": "Data Science"
    },
    {
        "name": "216",
        "department": "Cyber Security"
    },
]


let teachers = [
    {
        "name": "Alok Thakur",
        "department": "CSE",
        "subject": "Data Structure"
    },
    {
        "name": "Prem",
        "department": "CSE",
        "subject": "Chemistry"
    },
    {
        "name": "Sashank",
        "department": "CSE",
        "subject": "Hindi"
    },
    {
        "name": "Neha",
        "department": "CSE",
        "subject": "Nepali"
    },
    {
        "name": "Dipesh",
        "department": "CSE",
        "subject": "Chemistry"
    },
    {
        "name": "Rohit",
        "department": "CSE",
        "subject": "Hindi"
    },
    {
        "name": "Laxman",
        "department": "Cyber Security",
        "subject": "Math"
    },
    {
        "name": "Dev",
        "department": "Cyber Security",
        "subject": "Physics"
    },
    {
        "name": "Durga",
        "department": "Cyber Security",
        "subject": "Chemistry"
    },
    {
        "name": "Jethalal",
        "department": "Cyber Security",
        "subject": "Hindi"
    },
    {
        "name": "Monita",
        "department": "Cyber Security",
        "subject": "Nepali"
    },
    {
        "name": "Srijana",
        "department": "Cyber Security",
        "subject": "Management"
    },
    {
        "name": "Raju Thakur",
        "department": "AI ML",
        "subject": "Physics"
    },
    {
        "name": "Bipin Mandal",
        "department": "Data Science",
        "subject": "Chemistry"
    },
    {
        "name": "Laxman Singh",
        "department": "Computer Science",
        "subject": "English"
    },
    {
        "name": "Nitesh Kumar",
        "department": "Cyber Security",
        "subject": "English"
    },
    {
        "name": "Densih Yadav",
        "department": "Conputer Science",
        "subject": "English"
    },
]

let timings = [
    {
        "department": "CSE",
        "times": ["8-45:9-45", "9-45:10-45", "10-45:11-45", "11-45:12-45", "1-45:2-45", "2-45:3-45"]
    },
    {
        "department": "AI ML",
        "times": ["8-45:9-45", "9-45:10-45", "10-45:11-45", "11-45:12-45", "1-45:2-45", "2-45:3-45"]
    },
    {
        "department": "Data Science",
        "times": ["8-45:9-45", "9-45:10-45", "10-45:11-45", "11-45:12-45", "1-45:2-45", "2-45:3-45"]
    },
    {
        "department": "Cyber Security",
        "times": ["8-45:9-45", "9-45:10-45", "10-45:11-45", "11-45:12-45", "1-45:2-45", "2-45:3-45"]
    },
    {
        "department": "Computer Science",
        "times": ["8-45:9-45", "9-45:10-45", "10-45:11-45", "11-45:12-45", "1-45:2-45", "2-45:3-45"]
    }
]

const shuffle_teachers = (teachers) => {
    for (let i = teachers.length - 1; i >= 0; i--) {
        let random = Math.floor(Math.random() * teachers.length)
        let temp = teachers[i]
        teachers[i] = teachers[random]
        teachers[random] = temp
    }
    return teachers
}

let output = []

const transform = (classes, teachers, timings) => {

    for (let i = 0; i < classes.length; i++) { // classes.length
        let class_number = classes[i].name
        let class_department = classes[i].department

        let available_teachers = []
        let available_times = []
        
        for (let a = 0; a < teachers.length; a++) {
            if (teachers[a].department === class_department) {
                available_teachers.push(teachers[a])
            }
        }
        
        for (let a = 0; a < timings.length; a++) {
            if (timings[a].department === class_department) {
                available_times = timings[a].times
            }
        }

        available_teachers = shuffle_teachers(available_teachers)

        // console.log(class_number,class_department)
        // console.log(available_teachers)
        // console.log(available_teachers[1].name)

        for (let a = 0; a < available_teachers.length; a++) {
            output.push({
                "class_number": class_number,
                "name": available_teachers[a].name,
                "department": class_department,
                "subject": available_teachers[a].subject,
                "time": available_times[a]
            })
        }
    }
}

transform(classes, teachers, timings)
console.table(output)