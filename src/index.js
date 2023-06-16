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

const displayTask = function (i) {
  const deployTaskTitle = document.createElement('button')
  const deleteTaskButton = document.createElement('button')
  const deployTaskDesc = document.createElement('div')
  const task = taskManager.showTask(i)

  deployTaskTitle.innerHTML = task.title
  deployTaskDesc.innerHTML = task.desc
  deleteTaskButton.innerHTML = 'Delete this task'

  deployTaskTitle.addEventListener('click', function () {
    alert(`${task.title}\n${task.desc}\n${task.dueDate}\n${task.priority}\n${task.note}`)
  })
  deleteTaskButton.addEventListener('click', function (i) {
    taskManager.deleteTask(i)
  })

  document.body.appendChild(deployTaskTitle)
  document.body.appendChild(deployTaskDesc)
  document.body.appendChild(deleteTaskButton)
}

const displayAllTasks = function () {
  const currentTasks = taskManager.getAllTasks()
  for (let i = 0; i < currentTasks.length; i++) {
    displayTask(i)
  }
}

const buttonCreateTask = function () {
  const newTaskBtn = document.createElement('button')

  newTaskBtn.addEventListener('click', function () {
    const taskName = prompt('Name y0 task', 'Run')
    updatedLength = taskManager.getAllTasks().length
    taskManager.addTask(taskName)
    displayTask(updatedLength)
  })

  newTaskBtn.innerHTML = 'Add a task'
  document.body.appendChild(newTaskBtn)
}

buttonCreateTask()

taskManager.addTask('First', 'Create a task', 'Tomorrow', 'Low')
taskManager.addTask('Second', 'Display the tasks', 'Tonight', 'Low')

displayAllTasks()
