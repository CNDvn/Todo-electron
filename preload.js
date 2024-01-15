const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('todoAPI',{
    getData: () => ipcRenderer.invoke("getData"),
    handleData: (data) => ipcRenderer.invoke("handleData",data),
    changeStatus: (data) => ipcRenderer.invoke("changeStatus",data),
})