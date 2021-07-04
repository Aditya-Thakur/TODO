var tasks = [{
        "id": 1,
        "value": "Get Newspaper"
    },
    {
        "id": 2,
        "value": "Get Milk"
    },
    {
        "id": 3,
        "value": "Do Laundary"
    },
    {
        "id": 4,
        "value": "Cook Lunch"
    },
    {
        "id": 5,
        "value": "Visit Grandma"
    },
];
var completed = [{
    "id": 10,
    "value": "Take Medicine"
}];

function fillValues() {
    let taskList = "<ul>";
    tasks.forEach(task => {
        taskList += "<li><span title='Click to mark complete' onclick='markComplete(" + task.id + ")'>" + task.value + "</span><span class='delete-icon' title='Click to delete' onclick='deleteTask(" + task.id + ")'>❌</span></li>";
    });
    taskList += "</ul>";
    let completedList = "<ul>";
    completed.forEach(comp => {
        completedList += "<li title='Click to mark uncomplete' onclick='markUncomplete(" + comp.id + ")'>" + comp.value + "</li>";
    });
    completedList += "</ul>"
    // let mytask = document.getElementById('allTasks');
    // mytask.innerHTML = taskList;
    document.getElementById('allTasks').innerHTML = taskList;
    document.getElementById('completedTask').innerHTML = completedList;
}

function addTask() {
    let element = (document.getElementById('taskInput'));
    if (element.value != "" && element.value.length > 2) {
        tasks.push({
            id: tasks[tasks.length - 1].id + 1,
            value: element.value
        });
        element.value = "";
        fillValues();
        // changeLogo();
    } else if (element.value == "") {
        alert("Empty value not allowed.");
    } else if (element.value.length <= 2) {
        alert("Too short value.");
    }

}

// function changeLogo() {
//     let current = document.getElementById('logo');
//     current.innerText = "YourTODOS";
// }

function markComplete(id) {
    let completedTask;
    let newTaskList = [];
    tasks.forEach(task => {
        if (task.id == id) {
            completedTask = task;
        } else {
            newTaskList.push(task);
        }
    })
    completed.push(completedTask);
    tasks = newTaskList;
    fillValues();
}

function deleteTask(id) {
    let newList = [];
    tasks.forEach(task => {
        if (task.id != id) {
            newList.push(task);
        }
    });
    tasks = newList;
    fillValues();
}

function markUncomplete(id) {
    let uncompletedTask;
    let newTasksList = [];
    completed.forEach(task => {
        if (task.id == id) {
            uncompletedTask = task;
        } else {
            newTasksList.push(task);
        }
    })
    tasks.push(uncompletedTask);
    completed = newTasksList;
    fillValues();
}

window.onload = function () {
    fillValues();
};
