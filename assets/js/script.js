// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) ?? [];
let nextId = JSON.parse(localStorage.getItem("nextId")) ?? 0;

// TODO: create a function to generate a unique task id
function generateTaskId() {
   
    // if nextId does not exist in localStorage, set it to 1

        // otherwise, increment it by 1
  
    // save nextId to localStorage
    localStorage.setItem('nextId', ++nextId);
}

// TODO: create a function to create a task card
function createTaskCard(task) {
    // create card elements
    const taskCardEl = $('<div class="task card">');
    const titleEl = $('<h2>').text(task.title);
    const descriptionEl = $('<p>').text(task.description)
    const dueDateEl = $('<p>').text(task.dueDate);
    const cardButton = $('<button class="btn btn-danger delete m-3">Delete</button>');

    // set card background color based on due date
    const today = dayjs(dayjs().format('MM//DD/YYYY'), 'MM/DD/YYYY');
    const isDue = dayjs(task.dueDate, 'MM/DD/YYYY');

    taskCardEl.attr('data-id', task.id);

    if (today.isAfter(isDue)) taskCardEl.addClass('bg-danger');
    if (today.isSame(isDue)) taskCardEl.addClass('bg-warning');
        
    

    // append card elements
    $('#todo-cards').append(taskCardEl);
    taskCardEl.append(titleEl, dueDateEl, descriptionEl, cardButton);
   

}

// TODO: create a function to render the task list and make cards draggable
function renderTaskList() {
    // if taskList is null, set it to an empty array
  
    // empty existing task cards]
    $('.lane .card-body > *').empty();
    // loop through tasks and create task cards for each status
for (let task of taskList){
    createTaskCard(task);
}
        // Check status property for status make sure has the right background color
     
    // make task cards draggable
    $(function() {

    
    $(".task.card").draggable({
        revert: true,
        opacity: 0.7,
        zIndex: 1,  
    });
    });

}
// TODO: create a function to handle adding a new task
function handleAddTask(event) {
    event.preventDefault();

   
    // create a new task object
   const task = {
    title: $('#task-title').val().trim(),
    dueDate: $('#due-date').val().trim(),
    description: $('#description').val().trim(),
    id: nextId,
    status: 'to-do'
   };
    // add the new task to the taskList save and render
    taskList.push(task);
    localStorage.setItem('tasks', JSON.stringify(taskList));
    renderTaskList();
}

// TODO: create a function to handle deleting a task
function handleDeleteTask(event) {
    // get the task id from the button clicked
   const taskIndex = taskList.findIndex(task => task.id === task.id);

   if (taskIndex !== -1) {
        taskList.splice(taskIndex, 1);
   }
    // remove the task from the taskList, save and render
    localStorage.setItem('tasks', JSON.stringify(taskList));
    renderTaskList();
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-button')) {
            
        }});    
        return;
}

// TODO: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
 
    // get the task id and new status from the event
   $(this).find('.card-body > *').addClass("ui").append($(ui.draggable));
    // update the task status of the dragged card
    const id = $(ui.draggable).attr('data-id');

    for (let task of taskList) {
       if (id == task.id) {
           task.status = event.target.id;
       }
}
    // save and render
    localStorage.setItem('tasks', JSON.stringify(taskList));
    
   
}

// TODO: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    // render the task list
    renderTaskList();
    // add event listener
    $("#add-more-task button").on("click", function(event){
        handleAddTask(event);
    })
    $(".btn-danger").on("click", function(event){
        handleDeleteTask(event);
    })
    // make lanes droppable
    $(".lane").droppable({
        drop: handleDrop,
        accept: ".task.card",
        activeClass: "ui-state-highlight",

    });
    // make due date field a date picker
    $('#due-date').datepicker({
        changeMonth: true,
        changeYear: true,
    });
});
