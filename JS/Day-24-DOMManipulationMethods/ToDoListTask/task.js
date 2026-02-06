//! Sir's Code

// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//     <link rel="stylesheet" href="./style.css" />
//   </head>
//   <body>
//     <section class="todo-container">
//       <aside class="left-side">
//         <h1>Todo List Task</h1>
//         <p>Organize your day, one task at a time.</p>
//         <div class="input-group">
//           <input type="text" id="task-input" placeholder="Enter task here..." />
//           <button id="addTaskBtn">Add Task</button>
//         </div>
//       </aside>

//       <aside class="right-side">
//         <h2>Active Tasks</h2>
//         <div id="task-list">
         
//         </div>
//       </aside>
//     </section>
//     <script src="./todolist.js"></script>
//   </body>
// </html>

let addTaskBtn = document.getElementById("addTaskBtn");
let taskInput = document.getElementById("task-input");

addTaskBtn.addEventListener("click", todo);
document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    todo();
  }
});

function todo() {
  let taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Please enter task first");
  } else {
    let taskItem = document.createElement("div");

    taskItem.className = "task-item";

    let span = document.createElement("span");
    span.className = "list-item";
    span.textContent = taskValue;

    let removeTaskBtn = document.createElement("button");
    removeTaskBtn.className = "delete-btn";
    removeTaskBtn.textContent = "Delete Task";

    let taskList = document.getElementById("task-list");

    taskList.appendChild(taskItem);
    taskItem.appendChild(span);
    taskItem.appendChild(removeTaskBtn);

    removeTaskBtn.addEventListener("click", () => {
      taskList.removeChild(taskItem);
    });

    taskInput.value = "";
  }
}