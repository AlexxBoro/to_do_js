// Variables
let newTaskForm = document.querySelector('.new-task-container form');
let tasksContainer = document.querySelector('.tasks-container ul');

// On DOM load
document.addEventListener('DOMContentLoaded', function() {
    showTasks();
    bindAddTaskEvents();
    
});