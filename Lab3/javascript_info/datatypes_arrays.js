//task1
let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // 4

//task2
let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
styles[Math.floor((styles.length) - 1 / 2)] = 'Classics';
alert(styles.shift());
alert.unshift('Rap');
alert.unshift('Reggae');

//task3
function sumInput() {
    let numbers = Array();
    let result = prompt('Enter a number');
    let Summ = 0;
    while (result !== '' || result !== null) {
        numbers.push(numbers);
    }

    for (num in numbers) {
        Summ += num;
    }
    return Summ;
}

//task4
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // for each item of arr
      partialSum += item; // add it to partialSum
      maxSum = Math.max(maxSum, partialSum); // remember the maximum
      if (partialSum < 0) partialSum = 0; // zero if negative
    }
  
    return maxSum;
  }