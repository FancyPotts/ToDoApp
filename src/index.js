function task(title='Generic title', desc='Generic description of task', dueDate='Due yesterday', priority='Low') {
    return {
        title: title,
        desc: desc,
        dueDate: dueDate,
        priority: priority,
    }
}

const firstTask = task()
console.log(firstTask)