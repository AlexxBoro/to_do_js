// show tasks
function showTasks() {
  tasks.forEach(title => {
    addNewTask(title);
  });
}

// toggle complete
function toggleTaskComplete(task) {
  task.classList.toggle("btn-success");
}

// delete task
function deleteTask(task) {
  let liToDelete = task.closest("li");
  task.closest("ul").removeChild(liToDelete);
}
