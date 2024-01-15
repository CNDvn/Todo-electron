const init = async () => {
    const listTodo = await window.todoAPI.getData()
    listTodo.forEach((todo)=>{
            document.querySelector(`#${todo.status} ul`).innerHTML += `<li key="${todo.id}">${todo.title} <button onclick="changeStatus(${todo.id}, '${todo.status}')">change to doing</button></li>`
    })
}
init()

const addNewData = async () => {
    const title = document.getElementById('title').value
    const content = document.getElementById('content').value
    const id = await window.todoAPI.handleData({title,content})
    document.querySelector(`#todo ul`).innerHTML += `<li key="${id}">${title} <button onclick="changeStatus(${id},'${todo.status}')">change to doing</button></li>`
}

const changeStatus = async (id, preStatus)=>{
    let status = "doing"
    if(preStatus === 'doing'){
        status = "done"
    }
console.log(id,preStatus,status);
    await window.todoAPI.changeStatus({id, status})
    document.querySelector("#todo ul").innerHTML = ""
    document.querySelector("#doing ul").innerHTML = ""
    document.querySelector("#done ul").innerHTML = ""
    init()
} 