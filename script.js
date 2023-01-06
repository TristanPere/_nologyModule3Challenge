// 1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

const isNumberPositive = (number) => {
    if (number >= 0) { //taking 0 to be a positive
        return true;
    } else {
        return false;
    }
}

console.log(isNumberPositive(-1));
console.log(isNumberPositive(9));

// 2. Write a function that takes a number of days and converts it into an age.

const convertDaysToAge = (days) => {
    return days / 365;
}

console.log(convertDaysToAge(3650));
console.log(convertDaysToAge(6570));
