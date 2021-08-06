function leapYearChecker(year) {

    if ((year % 4 == 0 && year % 100 != 0) || (year % 4 == 0 && year % 100 == 0 && year % 400 == 0)) {
        return 'Yes!!, This is a leap year'
    }
    return 'No!!, This is a regular year'
}

const givenYear = 2100;
const isLeapYear = leapYearChecker(givenYear);
console.log(isLeapYear);
