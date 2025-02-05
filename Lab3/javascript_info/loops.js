// task1

let i = 3;

while (i) {
  alert( i-- ); // will show 3, 2, 1
}

// task2
let k = 0;
while (++k < 5) alert( k ); // will show 1, 2, 3, 4

i = 0;
while (i++ < 5) alert( i ); // will show 1, 2, 3, 4, 5 

//task3

for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i ); // both from 0 to 4

//task4

for (let x = 2; x <=10; x++) {
    if (x % 2 == 0) {
        alert(x);
    }
}

//task 5
i = 0;

while(i < 3) {
    alert(`number ${i}!`);
    i++;
}

//task 6
let num = prompt('Enter a number greater than 100');

while (num <= 100 && num !== '' && num != null) {
    num = prompt('Enter a number greater than 100');
}

//task 7

let n = promt('Enter the number.');

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}