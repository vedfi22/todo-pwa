document.getElementById('task-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();
  
  if (taskText) {
    addTask(taskText);
    taskInput.value = '';
  }
});

function addTask(text) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${text}</span>
    <button class="delete-btn">×</button>
  `;
  
  li.querySelector('span').addEventListener('click', function() {
    li.classList.toggle('completed');
  });
  
  li.querySelector('.delete-btn').addEventListener('click', function() {
    li.remove();
  });
  
  document.getElementById('task-list').appendChild(li);
}