// DOM ELEMEMTS
const taskTodoList = document.getElementById("taskTodoList");
const taskProgressList = document.getElementById("taskProgressList");
const taskDoneList = document.getElementById("taskDoneList");
const taskBlockedList = document.getElementById("taskBlockedList");
const addTaskBtn = document.getElementById("addTaskBtn");
const saveBtn = document.getElementById("save-btn");
const taskInput = document.getElementById("task-input");
const taskStatus = document.getElementById("status");

// VARIABLES FOR TASK
const tasks = [
  {
    name: "Task Two",
    status: "INPROGRESS",
  },
  {
    name: "Task Three",
    status: "BLOCKED",
  },
];

function zurah() {
  taskTodoList.innerHTML = "";
  taskProgressList.innerHTML = "";
  taskDoneList.innerHTML = "";
  taskBlockedList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    console.log("TASKS", tasks);
    let borderColor = "";
    switch (tasks[i].status) {
      case "TODO": {
        borderColor = "border-white";
        break;
      }
      case "INPROGRESS": {
        borderColor = "border-warning";
        break;
      }
      case "DONE": {
        borderColor = "border-success";
        break;
      }
      case "BLOCKED": {
        borderColor = "border-danger";
        break;
      }
      default: {
        console.log("ALDAA GARLAA");
      }
    }

    const newTaskCard = `
    <div class="d-flex justify-content-between align-items-center border border-1 ${borderColor} rounded p-2 bg-dark text-white-50">
    <span>${tasks[i].name}</span>
    <div>
        <button class="btn">
        <i class="bi bi-pencil text-white-50"></i>
        </button>
        <button class="btn">
        <i class="bi bi-trash text-danger" onclick="deleteTask(${i})"></i>
        </button>
    </div>
    </div>
 `;

    switch (tasks[i].status) {
      case "TODO": {
        taskTodoList.innerHTML += newTaskCard;
        break;
      }
      case "INPROGRESS": {
        taskProgressList.innerHTML += newTaskCard;
        break;
      }
      case "DONE": {
        taskDoneList.innerHTML += newTaskCard;
        break;
      }
      case "BLOCKED": {
        taskBlockedList.innerHTML += newTaskCard;
        break;
      }
      default: {
        console.log("ALDAA GARLAA");
      }
    }
  }
}

saveBtn.addEventListener("click", function () {
  const newTask = {
    name: taskInput.value,
    status: taskStatus.value,
  };
  tasks.push(newTask);
  zurah();
});

zurah();

const deleteTask = (taskIndex) => {
  tasks.splice(taskIndex, 1);
  zurah();
};
