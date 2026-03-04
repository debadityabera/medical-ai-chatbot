const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: true,
    webPreferences: {
      nodeIntegration: false,
    },
  });

  win.loadURL("http://localhost:5000");
}

app.whenReady().then(createWindow);