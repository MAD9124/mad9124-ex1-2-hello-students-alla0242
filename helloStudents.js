'use strict'

const students = require("./students.json");

students.forEach(({ firstName, lastName}) => {console.log(`Hello ${firstName} ${lastName}`)});

const studentCount = students.reduce((total, currentStudent) => {
    if (currentStudent.lastName[0].toUpperCase() === "D") {
        return total + 1;    }
        return total;
}, 0)

// 1. Read the JSON file into a variable called students

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1