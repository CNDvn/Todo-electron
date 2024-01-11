const init = async () => {
    const listTodo = await window.todoAPI.getData()
    listTodo.forEach((todo, index)=>{
        if(todo.status === 'todo'){
            document.getElementById("todo").innerHTML += `
            <div key=${index}>
                <h6>${todo.title}</h6>
                <p>${todo.content}</p>
            </div>
            `
        }else{
            document.getElementById("test").innerText = res[0].content
        }
    })
}
init()