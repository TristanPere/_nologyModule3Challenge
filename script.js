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

// 3. Write a function that takes three numbers and returns the largest of the three numbers.

const getLargestNumber = (numberOne, numberTwo, numberThree) => {
    if (numberOne>numberTwo && numberOne>numberThree) {
        return numberOne;
    } else if (numberTwo>numberOne && numberTwo>numberThree) {
        return numberTw0;
    } else if (numberThree>numberOne && numberThree>numberTwo) {
        return numberThree;
    } else {
        return `Numbers are equal = ${numberOne}`; //Beyond Scope
    }
}

console.log(getLargestNumber(2, 1, 4));
console.log(getLargestNumber(6,2,3));
console.log(getLargestNumber(0,0,0)); //Beyond Scope

// 4. Write a function that takes an array of names and returns the last name from the array of names.

const getLastName = (lastName) => {
    return lastName[lastName.length-1]
}

console.log(getLastName(["Charlie", "Rob", "Andy"]));
console.log(getLastName(["Ash","Stu"]));



