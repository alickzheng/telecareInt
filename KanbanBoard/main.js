const LISTMAP = "1";

const listNames = ["Backlog", "In-Progress", "Completed"];
let listMap = {};

if (!localStorage.getItem(LISTMAP)) {
    
    for (let i = 0; i < listNames.length; i++) {
        listMap[i] = new TaskList(listNames[i]);
    }


    localStorage.setItem(LISTMAP, JSON.stringify(listMap));

}
else {
    listMap = JSON.parse(localStorage.getItem(LISTMAP));
}


function addNewTask(task, dueDate, listNum) {
    listMap[listNum].addTask(new Task(task, dueDate));
}

function removeTask(task, listNum) {
    listMap[listNum].removeTask(task)
}

function shiftTaskUp(task, listNum) {
    listMap[listNum].moveTaskUp(task)
}

function shiftTaskDown(task, listNum) {
    listMap[listNum].moveTaskDown(task)
}

function moveTask(task, originListNum, destinationListNum) {
    listMap[originListNum].removeTask(task)
    listMap[destinationListNum.addTask(task)]
}