// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (arr) {
    let newArr = [arr[0], arr[1]];
    return newArr;
};

const returnLastTwoDrivers = function (arr) {
    return [arr[arr.length - 2], arr[arr.length - 1]];
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function (num2) {
        return num * num2
    }
};
function fareDoubler(fares) {
    return fares * 2;
}
function fareTripler(fares) {
    return fares * 3;
}

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers);
}
