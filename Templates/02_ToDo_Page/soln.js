const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function addTask() {
    const taskText = input.value;
    
    // Don't add empty tasks
    if (taskText === "") return;

    // Create a new card div
    const card = document.createElement('div');
    card.classList.add('card');

    // Create text element
    const textSpan = document.createElement('span');
    textSpan.classList.add('task-text');
    textSpan.textContent = taskText;

    // Toggle complete on click
    textSpan.onclick = function() {
        card.classList.toggle('completed');
    };

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Remove';
    
    // Remove element dynamically
    deleteBtn.onclick = function() {
        card.remove();
    };

    // Append child elements
    card.appendChild(textSpan);
    card.appendChild(deleteBtn);
    todoList.appendChild(card);

    // Clear input
    input.value = '';
}
