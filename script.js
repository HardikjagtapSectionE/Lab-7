document.addEventListener('DOMContentLoaded', () => {
    let taskForm = document.getElementById('task-form');
    let taskInput = document.getElementById('task-input');
    let taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const label = document.createElement('label');
        label.textContent = taskText;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';

        editBtn.addEventListener('click', () => {
        const newText = prompt('Enter new text for the task:', label.textContent);
        if (newText !== null) {
            label.textContent = newText;
        }
    });

        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        checkbox.addEventListener('change', () => {
            label.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
        });

        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
});
