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