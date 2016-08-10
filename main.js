const { app, BrowserWindow } = require('electron');

var mainWindow = null;

app.on('ready', () => {
  if(!mainWindow) {
    mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      resizable: false
    });

    mainWindow.loadURL('file://' + __dirname + "/index.html");
    mainWindow.on('closed', () => {
      mainWindow = null;
    });
  }
});
