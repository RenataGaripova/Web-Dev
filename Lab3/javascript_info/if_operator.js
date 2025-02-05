// tas1 - will be shown

if ("0") {
    alert( 'Hello' );
  }


// task2

let res = prompt('What is the “official” name of JavaScript?')
let answ = String('ECMAScript')
if (res == answ) {
    alert('Right!');
} else {
    alert("You don't know? ECMAScript!");
}


// task3

let val = prompt('Type a number', 0);

if (val > 0) {
  alert( 1 );
} else if (val < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

// task4
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

//task5
let message = (login == 'Employee') ? 'Hello':
    (login == 'Director') ? 'Greetings':
    (login == '') ? 'No login':
    '';
