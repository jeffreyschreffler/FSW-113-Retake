// Declare any necessary variables.
let student;
const studentNameField = document.querySelector('#studentName')
const classNameField = document.querySelector('#className')
const studentScoreField = document.querySelector('#studentScores')
const possibleScoreField = document.querySelector('#possibleScores')
const certName = document.querySelector("#certStudentName");
const certClass = document.querySelector("#certClassName");
const certGrade = document.querySelector("#certGrade");


// Add am evemt listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.

document.querySelector('#print').addEventListener('click', () => {
    createStudent();
})

// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.
document.querySelector('#reset').addEventListener('click', () => {
    studentNameField.value = '';
    classNameField.value = '';
    studentScoreField.value = '';
    possibleScoreField.value = '';
})




// Create a function that instantiates a new student object with the input from the HTML form.

function createStudent() {
    let studentScore = toNumArray(studentScoreField.value);
    let possibleScore = toNumArray(possibleScoreField.value);
    student = new Student(studentNameField.value, classNameField.value, studentScore.value, possibleScore.value)
    fillOutCertificate(student)
}

// Create a function that fills in the student's name, class name, and calculated grade on the certificate .

function fillOutCertificate(student) {
    console.log(student)
    certName.innerText = student.getStudentName();
    certClass.innerText = student.getClassName();
    certGrade.innerText = student.LetterGrade();
}

// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.
function toNumArray(str) {
    return str.split(",").map(score => Number(score.trim()));
}