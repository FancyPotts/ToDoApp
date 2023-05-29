function task(title='Generic title', desc='Generic description of task', dueDate='Due yesterday', priority='Low', note='', checkList=[]) {
    return {
        title: title,
        desc: desc,
        dueDate: dueDate,
        priority: priority,
        note: note !== '' ? note : undefined,
        checkList: checkList.length > 0 ? checkList : undefined,
    }
}

const taskManager = (function () {
    const taskArray = []
    return {
        addTask: function (title, desc, dueDate, priority, note, checkList) {
            const newTask = task(title, desc, dueDate, priority, note, checkList);
            taskArray.push(newTask)
        },
        deleteTask: function (index) {
            if (index >= 0 && index < taskArray.length) {
                taskArray.splice(index, 1)
            }
        },
        editTask: function (index, updatedTask) {
            if (index >= 0 && index < taskArray.length) {
                taskArray[index] = updatedTask
        }
    },
        getAllTasks: function () {
            return taskArray
        }
}
})()

taskManager.addTask('First', 'Create a task', 'Tomorrow', 'Low')
