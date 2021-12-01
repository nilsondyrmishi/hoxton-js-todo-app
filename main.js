
const addTodoForm = document.querySelector(".add-item")
const todoList = document.querySelector(".todo-list")
const completedList = document.querySelector(".completed-list")
const showCompletedCheckbox = document.querySelector('.show-completed-checkbox')

const state = {
    todos: [
        {
            title: "Learn JS",
            completed: true
        },
        {
            title: "Wake up early",
            completed: false
        },

        {
            title: "Sleep well",
            completed: false
        }
    ],
    showCompleted: true
}





function getCompletedTodos() {
    return state.todos.filter(function(todo) {
        return todo.completed
    })
}

function getIncompleteTodos () {
    return state.todos.filter(function(todo) {
        return !todo.completed
    })
}

function editTodo (todo){
    todo.title = prompt(`Its not that great to change your todo but anyway: `)
    render()
}

function toggleTodo (todo) {
    todo.completed = !todo.completed
}

function addTodo (todo) {
    state.todos.push(todo)
}

function deleteTodo (text) {
    state.todos = state.todos.filter(function(todo){
        return todo.title !== text
    })
}




function renderCompletedTodos(){


    const completedTodos = getCompletedTodos()
    completedList.innerHTML = ""

    for (const todo of completedTodos){

        const todoListElement = document.createElement("li")
        todoListElement.setAttribute("class","todo completed")

        todoListElement.innerHTML = `
        <div class="completed-section">
            <input class="completed-checkbox" type="checkbox" />
        </div>
        
        <div class="text-section">
            <p class="text">${todo.title}</p>
        </div>
        <div class="button-section">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>  
        `

        const editButton = todoListElement.querySelector(".edit")
        editButton.addEventListener("click", function(){
            editTodo (todo)
            render()
        })

        const deleteButton = todoListElement.querySelector('.delete')
        deleteButton.addEventListener("click", function(){
            deleteTodo (todo.title)
            render()
        })


        const completedCheckbox = todoListElement.querySelector(".completed-checkbox")
        completedCheckbox.checked = todo.completed
        completedCheckbox.addEventListener("click", function(){
            toggleTodo(todo)
            render()
        })

        completedList.append(todoListElement)
    }
}
function renderIncompleteTodos(){

    const incompleteTodos = getIncompleteTodos()
    todoList.innerHTML = ""

    for (const todo of incompleteTodos){

        const listElement = document.createElement("li")
        listElement.setAttribute("class","todo")

        listElement.innerHTML = `
            <div class="completed-section">
                <input class="completed-checkbox" type="checkbox" />
            </div>
                
            <div class="text-section">
                <p class="text">${todo.title}</p>
            </div>
            <div class="button-section">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div> 
            `

        const editButton = listElement.querySelector(".edit")
        editButton.addEventListener("click", function(){
            editTodo (todo)
            render()
        })

        const deleteButton = listElement.querySelector('.delete')
        deleteButton.addEventListener("click", function () {
                deleteTodo(todo.title)
                render()
            })

            const completedCheckbox = listElement.querySelector(".completed-checkbox")
            completedCheckbox.checked = todo.completed
            completedCheckbox.addEventListener("click", function () {
                toggleTodo(todo)
                render()
            })


        todoList.append(listElement)
    }
}
function userInputTodo(){
    addTodoForm.addEventListener('submit', function (e) {
        e.preventDefault()


        const userAddTodos= document.querySelector('.text-input')


        const todo = {
            title: userAddTodos.value,
            condition: false
        }

        addTodo(todo)
        addTodoForm.reset()
        render()

    } )

}

function render(){
    renderCompletedTodos()
    renderIncompleteTodos()

    const checkboxCompletedSection = document.querySelector("section.completed-section")

    if(state.showCompleted){
        checkboxCompletedSection.style.display = 'block'
    }else {
        checkboxCompletedSection.style.display = 'none'
    }

}


showCompletedCheckbox.addEventListener('click', function(){
    state.showCompleted = showCompletedCheckbox.checked
    render()
})


render()
userInputTodo()
















