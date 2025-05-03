const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        heigh: 800,
        icon: path.join(__dirname, '../assets/logo.ico')
    })

    win.loadFile(path.join(__dirname, '../views/login.html'));

}

app.whenReady().then(createWindow);