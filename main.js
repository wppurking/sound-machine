const { app, BrowserWindow } = require('electron');

var mainWindow = null;

app.on('ready', () => {
  if(!mainWindow) {
    mainWindow = new BrowserWindow({
      width: 368,
      height: 700,
      resizable: false,
      frame: false
    });

    mainWindow.loadURL('file://' + __dirname + "/index.html");
    mainWindow.on('closed', () => {
      mainWindow = null;
    });
  }
});
