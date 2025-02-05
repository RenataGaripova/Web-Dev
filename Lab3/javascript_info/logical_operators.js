let username = prompt("Enter your login");

if (username == "Admin") {
    let passw = prompt("Enter your password");

    if (passw == "TheMaster") {
        alert("Welcome");
    } else if (pass === '' || pass === null) {
        alert( 'Canceled' );
    } else {
        alert( 'Wrong password' );
    }
} else if (username == None || username == '') {
    alert("Cancelled"); 
} else {
    alert("I dont't know you!")
}