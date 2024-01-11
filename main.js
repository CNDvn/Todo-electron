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
}

app.whenReady().then(()=>{
    ipcMain.handle("ping", () => "pong")
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