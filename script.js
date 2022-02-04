const PRIORITIES = {
    LOW: 'low',
    HIGH: 'high',
}
const STATUSES = {
    TODO: 'Todo',
    IN_PROGRESS: 'In progress',
    DONE: 'Done',
}

const list = [
    {
        name: 'create a post',
        status: 'In progress',
        priority: 'low'
    },
    {
        name: 'test',
        status: 'Done',
        priority: 'high'
    }
]

function changeStatus(name, status) {
    const changeableTask = list.find(item => item.name === name)
    if (changeableTask) {
        changeableTask.status = status
    }
}

function changePriority(name, priority) {
    const changeableStatus = list.find(item => item.name === name)
    if (changeableStatus) {
        changeableStatus.priority = priority
    }
}

function addTask(name) {
    const DEFAULT_TASK = {
        name,
        status: STATUSES.TODO,
        priority: PRIORITIES.LOW
    }
    if (name) {
        list.push(DEFAULT_TASK)
    }
}

function deleteTask(name) {
    const taskToDelete = list.findIndex(item => item.name === name)
    list.splice(taskToDelete, 1)

}

function showBy(by) {
    if (by === 'status') {
        for (let status in STATUSES) {
            console.log(`${STATUSES[status]}:`)
            let count = 0
            list.filter(function (name, index) {
                if (list[index].status === STATUSES[status]) {
                    console.log(` ${list[index].name}`)
                    count++
                }
            })
            if (!count) {
                console.log(` -`)
            }
        }
    } else if ('priority') {
        for (let priority in PRIORITIES) {
            console.log(`${PRIORITIES[priority]}:`)
            let count = 0
            list.filter(function (name, index) {
                if (list[index].priority === PRIORITIES[priority]) {
                    console.log(` ${list[index].name}`)
                    count++
                }
            })
            if (!count) {
                console.log(` -`)
            }
        }
    } else {
        console.log('Enter valid value output')
    }
}

changeStatus('create a post', STATUSES.DONE)
changePriority('create a post', PRIORITIES.HIGH)
addTask('Make a "deleteTask"')
addTask('Walk around Lviv')
changePriority('Walk around Lviv', PRIORITIES.HIGH)
deleteTask('test')

showBy('priority')
console.log(list)