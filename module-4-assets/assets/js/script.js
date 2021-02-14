var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);
var taskToDoEl = document.querySelector("#task-to-do");

buttonEl.addEventListener("click", function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    taskToDoEl.appendChild(listItemEl);
});