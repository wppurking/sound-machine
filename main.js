const { app, BrowserWindow, globalShortcut } = require('electron');
const { ipcMain } = require('electron');

var mainWindow = null;
console.log("ipc in main:");
console.log(ipcMain);

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

  setGlobalShortcut();
});

function setGlobalShortcut() {
  globalShortcut.unregisterAll();

  let beepOrder = [
    'ba-dum-tsss',
    'applause',
    'money',
    'burp',
    'crowd-laughing',
    'fart',
    'sad-trombone'
  ];

  beepOrder.forEach((v, i) => {
    globalShortcut.register(`Control+${i + 1}`, () => {
      mainWindow.webContents.send('beep', v);
    });
  });
}
