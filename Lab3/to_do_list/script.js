// Script will start working when the html-page is loaded
document.addEventListener('DOMContentLoaded', function() { 
    // Getting our html form and unordered list by IDs
    const myForm = document.getElementById('myForm') 
    const toDoList = document.getElementById('toDoList')

    function addTask(task) {
        // We will add a checkbox, the task itself and delete button into <li> elements
        const li = document.createElement('li'); 
        li.className = 'task';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = false;
        checkbox.className = 'checkbox';

        const delButton = document.createElement('button');
        delButton.className = 'delBox';

        const label = document.createElement('label')
        label.textContent = task;
        label.for = 'checkbox;'


        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(delButton);

        return li;
    }

    // When a user adds a new task, we create a new <li> element and add to <ul>
    myForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Helps us to prevent page reload

        const Task = document.getElementById('myInput').value;

        if (Task != '') {
            document.getElementById('myInput').value = '';
            const Item = addTask(Task);
            toDoList.appendChild(Item);
        }
    }
    );

    // When a user clicks on a delete button, we remove the task from <ul>
    toDoList.addEventListener('click', function(event) {
        if (event.target.tagName == 'BUTTON') {
            const Item = event.target.parentNode;
            toDoList.removeChild(Item);
        }
    })

   
});