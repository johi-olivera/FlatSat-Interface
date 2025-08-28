const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    show: false, // Oculta hasta que se maximice, evita parpadeo
    icon: path.join(__dirname, '../assets/logo.ico'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.maximize();       // Maximiza la ventana
  win.show();           // Muestra la ventana maximizada
  win.loadFile(path.join(__dirname, '../views/pages/home.html'));
}

app.whenReady().then(createWindow);
