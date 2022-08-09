class TaskList {
    constructor(listName) {
        this.name = listName;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(task) {
        this.tasks.splice(this.tasks.indexOf(task), 1)
    }

    moveTaskUp(task) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i] == task) {
                if (i != 0) {
                    let tempTask = this.tasks[i-1];
                    this.tasks[i-1] = task;
                    this.tasks[i] = tempTask;
                }
            }
        }
    }

    moveTaskDown(task) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i] == task) {
                if (i != this.tasks.length - 1) {
                    let tempTask = this.tasks[i+1];
                    this.tasks[i+1] = task;
                    this.tasks[i] = tempTask;
                }
            }
        }
    }
}