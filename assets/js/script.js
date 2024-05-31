// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const taskDisplayEl = $('#task-display');
const taskTitleInputEl = $('#task-title');
const taskDescriptionInput = $('#description');
const taskDateInput = $('#due-date');
const taskFormEl = $('#task-form');

// TODO: create a function to generate a unique task id
function generateTaskId() {
    const nextId = {
        id: crypto.randomUUID(),
        title: taskTitleInputEl,
        description: taskDescriptionInput,
        dueDate: taskDateInput,
        status: 'to-do',
    };
    // if nextId does not exist in localStorage, set it to 1
    if (!localStorage.getItem('nextId')) {
        localStorage.setItem('nextId', 1);

        // otherwise, increment it by 1
    } else {
        let currentId = parseInt(localStorage.getItem('nextId'));
        localStorage.setItem('nextId', currentId + 1);
    }
    // save nextId to localStorage
    const task = ('nextId');
    task.push(nextId);
}

// TODO: create a function to create a task card
function createTaskCard(task) {
    // create card elements
    const card = document.createElement('div');
    const cardTitle = document.createElement('h2');
    const cardText = document.createElement('p');
    const cardDueDate = document.createElement('p');
    const cardButton = document.createElement('button');

    // set card background color based on due date
    if (task.dueDate && task.status !== 'done') {
        const current = dayjs();
        const taskDueDate = dayjs(task, dueDate, 'DD/MM/YYYY');
        if (current.isSame(taskDueDate, 'day')) {
            createTaskCard.addClass('bg-warning text-white');
        } else if (current, isAfter(taskDueDate)) {
            TaskCard.addClass('bg-danger text-white');
        }

    }
    // append card elements
    taskDisplayEl.append(card);
    card.append(cardTitle);
    card.append(cardText);
    card.append(cardDueDate);
    card.append(cardButton);

}

// TODO: create a function to render the task list and make cards draggable
function renderTaskList() {
    // if taskList is null, set it to an empty array
    if (taskList === null) {
        taskList = [];
    }
    // empty existing task cards
    const todoList = $('#todo-cards');
    todoList.empty();
    const inProgressList = $('#in-progress-cards');
    inProgressList.empty();
    const doneList = $('#done-cards');
    doneList.empty();
    // loop through tasks and create task cards for each status
    for (let task of tasks)
        
    // make task cards draggable
    $('.draggable').draggable({
        opacity: 0.7,
        zIndex: 100,
        helper: function (e) {
            const original = $(e.target).hasClass('ui-draggable')
            ? $(e.target)
            : $(e.target).closest('ui-draggable');
            return original.clone().css({
                width: original.outerWidth(),
            })
        }
    })
}

// TODO: create a function to handle adding a new task
function handleAddTask(event) {
    // create a new task object
   
    // add the new task to the taskList save and render
    let task = JSON.parse(localStorage.getItem("task")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// TODO: create a function to handle deleting a task
function handleDeleteTask(event) {
    // get the task id from the button clicked

    // remove the task from the taskList, save and render
}

// TODO: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    // get the task id and new status from the event

    // update the task status of the dragged card

    // save and render
}

// TODO: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    // render the task list

    // add event listener

    // make lanes droppable

    // make due date field a date picker
});
