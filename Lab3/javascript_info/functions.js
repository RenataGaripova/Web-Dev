//task1 
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  }

  function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }

//task2

function min(a, b) {
    return (a < b) ? a : b;
}

function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

//task3

function pow(x, n) {
    if (n < 1) {
        return alert('Negative numbers are not supported.');
    }
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }