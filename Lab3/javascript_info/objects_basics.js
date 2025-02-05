// task1

let user = new Object();
user = {
    name : 'John',
    surname : 'Smith',
}

user.name = 'Pete';

delete user.name;

//task2

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

//task3

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let result = 0;

for (let key in salaries) {
    result += salaries.key;
}

alert(result);

//task4

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
  // after the call
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };

function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }