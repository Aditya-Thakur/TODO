var tasks = [
    {
        "id": 1,
        "value" : "Get Newspaper"
    },
    {
        "id": 2,
        "value" : "Get Milk"
    },
    {
        "id": 3,
        "value" : "Do Laundary"
    },
    {
        "id": 4,
        "value" : "Cook Lunch"
    },
    {
        "id": 5,
        "value" : "Visit Grandma"
    },
];
var completed = [
    {
        "id": 10,
        "value" : "Take Medicine"
    }
];

function fillValues() {
    let taskList = "<ul>";
    tasks.forEach(task => {
        taskList += "<li title='Click to complete' onclick='markComplete("+task.id+")'>" + task.value + "</li>";
    });
    taskList+= "</ul>";
    let completedList = "<ul>";
    completed.forEach(comp => {
        completedList += "<li>" + comp.value + "</li>";
    });
    completedList += "</ul>"
    // let mytask = document.getElementById('allTasks');
    // mytask.innerHTML = taskList;
    document.getElementById('allTasks').innerHTML = taskList;
    document.getElementById('completedTask').innerHTML = completedList;
}

function addTask() {
    let element = (document.getElementById('taskInput'));
    if(element.value != "" && element.value.length > 2) {
        tasks.push({
            id: tasks.length + 1,
            value: element.value
        });
        element.value = "";
        fillValues();
        // changeLogo();
        console.log(tasks);
    } else if(element.value == "") {
        alert("Empty value not allowed.");
    } else if (element.value.length <= 2 ) {
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
    tasks.map( task => {
        if(task.id == id) {
            completedTask = task;
        } else {
            newTaskList.push(task);
        }
    })
    completed.push(completedTask);
    tasks = newTaskList;
    fillValues();

}

window.onload = function() {
    console.log("Hello world!");
    fillValues();
  };