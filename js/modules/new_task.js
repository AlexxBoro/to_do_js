function addNewTask(title) {
  let taskLi = document.createElement("li");
  taskLi.classList.add("single-task");
  taskLi.innerHTML = prepareTaskHTML(title);

  // Events - toggle and delete
  let toggleCompleteBtn = taskLi.querySelector(".toggle-complete-btn");
  let deleteBtn = taskLi.querySelector(".delete-task-btn");

  toggleCompleteBtn.addEventListener("click", function() {
    toggleTaskComplete(this);
  });

  deleteBtn.addEventListener("click", function() {
    deleteTask(this);
  });

  //add task to DOM
  tasksContainer.appendChild(taskLi);
}

function prepareTaskHTML(title) {
  return (
    '<div class="input-group">' +
    '<span class="input-group-btn">' +
    '<button class="btn btn-default toggle-complete-btn" type="submit"><i class="fa fa-check"></i></button>' +
    "</span>" +
    '<input type="text" class="form-control" placeholder="tytuł zadania..." value="' +
    title +
    '"/>' +
    '<span class="input-group-btn">' +
    '<button class="btn btn-danger delete-task-btn" type="submit"><i class="fa fa-times"/></button>' +
    "</span>" +
    "</div>"
  );
}

// Add new task events
function bindAddTaskEvents() {
  // on submit
  newTaskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let title = this.querySelector("input").value;

    if (title) {
      addNewTask(title);
    }
  });
}
