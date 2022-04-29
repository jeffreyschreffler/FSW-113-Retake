// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
 
class Student {
    constructor(studentName,className,studentScores,possibleScores){
        this.studentName = studentName;
        this.className = className;
        this.studentScores = studentScores;
        this.possibleScores = possibleScores;
        
    }
    getStudentName() {
        return this.studentName;
    }
    getClassName() {
            return this.className;
        }


// The class should also contain the following methods:
    totalScores() {
        return this.studentScores.reduce((sum, curr) => sum + curr);
    }

// - a method that adds up all the student's scores
    totalPossible() {
        return this.possibleScores.reduce((sum, curr) => sum + curr);
    }

// - a method that adds up all the possible scores
    getGrade() {
        return this.totalScores() / this.totalPossible() * 100;
    }

// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)

    LetterGrade() {
        if (this.getGrade() >= 90) return 'A';
        if (this.getGrade() >= 80) return 'B';
        if (this.getGrade() >= 70) return 'C';
        if (this.getGrade() >= 60) return 'D';
        if (this.getGrade() >=59) return 'F';
    }
}