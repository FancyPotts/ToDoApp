function task (title = 'Generic title', desc = 'Generic description of task', dueDate = 'Due yesterday', priority = 'Low', note = '', checkList = []) {
  return {
    title,
    desc,
    dueDate,
    priority,
    note: note !== '' ? note : undefined,
    checkList: checkList.length > 0 ? checkList : undefined
  }
}

const taskManager = (function () {
  const taskArray = []
  return {
    addTask: function (title, desc, dueDate, priority, note, checkList) {
      const newTask = task(title, desc, dueDate, priority, note, checkList)
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
    },
    showTask: function (n) {
      return taskArray[n]
    }
  }
})()

const displayTasks = function () {
  const currentTasks = taskManager.getAllTasks()
  document.body.innerHTML = ''
  for (let i = 0; i < currentTasks.length; i++) {
    const deployTaskTitle = document.createElement('button')
    const deployTaskDesc = document.createElement('div')
    const task = taskManager.showTask(i)

    deployTaskTitle.innerHTML = task.title
    deployTaskDesc.innerHTML = task.desc

    deployTaskTitle.addEventListener('click', function () {
      alert(`${task.title}\n${task.desc}\n${task.dueDate}\n${task.priority}\n${task.note}`)
    })

    document.body.appendChild(deployTaskTitle)
    document.body.appendChild(deployTaskDesc)
  }
}

taskManager.addTask('First', 'Create a task', 'Tomorrow', 'Low')
taskManager.addTask('Second', 'Display the tasks', 'Tonight', 'Low')

displayTasks()
