const form = document.querySelector("#form");
const input = document.querySelector("#input");
const todosUL = document.querySelector("#todos");


form.addEventListener("submit" , (e)=>{
    e.preventDefault()

    addTodo()
})

function addTodo(todo){
    let todoText = input.value
    console.log(todoText)

    if(todo){
        todoText = input.value
    }

    if(todoText){
        const todoEl = document.createElement('li');
        if(todo && todo.completed){
            todoEl.classList.add('completed')
        }
        todoEl.addEventListener('click' , ()=>{
            todoEl.classList.toggle('completed')
        })

        todoEl.addEventListener('contextmenu' , (e)=>{
            e.preventDefault()
            todoEl.remove()
        })

        todoEl.innerText = todoText;
        todosUL.appendChild(todoEl)

        input.value = '';
    }
}