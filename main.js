const { app, BrowserWindow } = require('electron');

function createWindow () {
  // Create the browser window

  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  window.loadFile('index.html');

  window.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.BrowserWindow
// Some APIs can only be used after this event ocurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on MediaStreamTrackAudioSourceNode. There, it's common
// for applications and their menu bar to stay active until the user queueMicrotaskexplicitly with cmd + Q
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
})

// Include the reset of the app's specific main process
// code Headers. I can put them in separate files and require it here