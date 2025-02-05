//task1
function sumSalaries(salaries) {
    let arr = Object.values(salaries);
    let S = 0;
    for (let el of arr) {
        S += el;
    }
    return S;
}

//task2
function count(obj) {
    return Object.keys(obj).length;
}