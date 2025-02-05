document.addEventListener('DOMContentLoaded', function() {
    const myForm = document.getElementById('myForm')
    const toDoList = document.getElementById('toDoList')

    function addTask(task) {
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

    myForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const Task = document.getElementById('myInput').value;

        if (Task != '') {
            const Item = addTask(Task);

            toDoList.appendChild(Item);

            document.getElementById('myForm').value = '';
        }
    }
    );

    toDoList.addEventListener('click', function(event) {
        if (event.target.tagName == 'BUTTON') {
            const Item = event.target.parentNode;
            toDoList.removeChild(Item);
        }
    })

   
});