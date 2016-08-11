const { app, BrowserWindow, globalShortcut } = require('electron');
const ipc = require('electron').ipcMain;

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

function setGlobalShortcut(prefix) {
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

  if(!prefix) {
    prefix = 'CmdOrCtrl';
  }

  beepOrder.forEach((v, i) => {
    globalShortcut.register(`${prefix}+${i + 1}`, () => {
      mainWindow.webContents.send('beep', v);
    });
  });
}

ipc.on('quit-app-window', () => app.quit());
ipc.on('set-global-shortcuts', (ev, shortcuts) => {
  setGlobalShortcut(shortcuts.join("+"));
})
