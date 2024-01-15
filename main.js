const {app, BrowserWindow, ipcMain} = require('electron')
const path = require("node:path")
const data = require("./data")

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            preload: path.join(__dirname, 'preload.js')            
        }
    })

    win.loadFile("index.html")
    win.webContents.openDevTools()
}

app.whenReady().then(()=>{
    ipcMain.handle("handleData", (event,dataInput) => {
        let id =-1 
        if(!dataInput.id){
            id = data.length + 1
            data.push(dataInput)
        }else{
            id = dataInput.id
            data[id- 1] = dataInput
        }
        return id
    })

    ipcMain.handle("changeStatus", (event,dataInput) => {
        data[dataInput.id - 1].status = dataInput.status
    })

    ipcMain.handle("getData", () => data)
    

    createWindow()
}).catch((err)=> {
    console.log(err);
    new BrowserWindow({
        width:800,
        height: 600,
    }).loadFile("error.html")
})

app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin') app.quit()
})