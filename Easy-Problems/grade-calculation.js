function gradeCalculation(mark) {
    if (mark >= 80) {
        return 'A+';
    }
    else if (mark >= 70) {
        return 'A';
    }
    else if (mark >= 60) {
        return 'B+';
    }
    else if (mark >= 50) {
        return 'C';
    }
    else if (mark >= 40) {
        return 'D';
    }
    return 'F';
}
const givenMark = 67;
var calculatingTheGrade = gradeCalculation(givenMark);
console.log(calculatingTheGrade);
