const taskInput = document.getElementById('taskInput');
  const todoList = document.getElementById('todoList');

  function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) {
      alert('Please enter a task.');
      return;
    }

    // Create list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Mark task completed on click
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent triggering li click
      todoList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    taskInput.value = '';
    taskInput.focus();
  }

  // Optional: add task on Enter key press
  taskInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      addTask();
    }
  });