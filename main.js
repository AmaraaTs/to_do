// DOM ELEMEMTS
const taskTodoList = document.getElementById("taskTodoList");
const taskProgressList = document.getElementById("taskProgressList");
const taskDoneList = document.getElementById("taskDoneList");
const taskBlockedList = document.getElementById("taskBlockedList");
const addTaskBtn = document.getElementById("addTaskBtn");
const saveBtn = document.getElementById("save-btn");
const taskInput = document.getElementById("task-input");
const taskStatus = document.getElementById("status");
const todoCountEl = document.getElementById("todo-count");
const progressCountEl = document.getElementById("progress-count");
const doneCountEl = document.getElementById("done-count");
const blockedCountEl = document.getElementById("blocked-count");

// VARIABLES FOR TASK
let isEdited = false;
let editedIndex = -1;
let todoCount = 0;
let progressCount = 0;
let doneCount = 0;
let blockedCount = 0;

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
  todoCount = 0;
  progressCount = 0;
  doneCount = 0;
  blockedCount = 0;

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
        <i class="bi bi-pencil text-white-50" data-bs-toggle="modal"
          data-bs-target="#taskModal" onclick ="editTask(${i})"></i>
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
        todoCount += 1;
        break;
      }
      case "INPROGRESS": {
        taskProgressList.innerHTML += newTaskCard;
        progressCount += 1;
        break;
      }
      case "DONE": {
        taskDoneList.innerHTML += newTaskCard;
        doneCount += 1;
        break;
      }
      case "BLOCKED": {
        taskBlockedList.innerHTML += newTaskCard;
        blockedCount += 1;
        break;
      }
      default: {
        console.log("ALDAA GARLAA");
      }
    }
    todoCountEl.textContent = todoCount;
    progressCountEl.textContent = progressCount;
    doneCountEl.textContent = doneCount;
    blockedCountEl.textContent = blockedCount;
  }
  console.log(todoCount);
  console.log(progressCount);
  console.log(doneCount);
  console.log(blockedCount);
}

zurah();

saveBtn.addEventListener("click", function () {
  if (isEdited) {
    tasks[editedIndex].name = taskInput.value;
    tasks[editedIndex].status = taskStatus.value;
    isEdited = false;
  } else {
    const newTask = {
      name: taskInput.value,
      status: taskStatus.value,
    };
    tasks.push(newTask);
  }
  taskInput.value = "";
  taskStatus.value = "TODO";
  zurah();
});

const deleteTask = (taskIndex) => {
  tasks.splice(taskIndex, 1);
  zurah();
};

const editTask = (taskIndex) => {
  console.log(taskIndex);
  taskInput.value = tasks[taskIndex].name;
  taskStatus.value = tasks[taskIndex].status;
  isEdited = true;
  editedIndex = taskIndex;
};
