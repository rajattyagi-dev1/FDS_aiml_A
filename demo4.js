const student={
    id:101,
    name:"Rajat Tyagi",
    Branch: "Cse AIML"
}

const newStudent={
    ...student,
    address:{
        street:"London street",
        city:"London",
        pincode:201009,
    }
}

console.log("Student=",student)
console.log("New Student=",newStudent)
