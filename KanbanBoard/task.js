class Task {
    constructor(taskName, taskDueDate) {
        this.name = taskName;
        this.dueDate = taskDueDate;
    }
    rename(newName) {
        this.name = newName;
    }
}