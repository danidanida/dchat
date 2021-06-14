const electron = require("electron");
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;

app.on("ready", (_) => {
  mainWindow = new BrowserWindow({
    height: 500,
    width: 400,
  });

  mainWindow.loadURL(`file://${__dirname}/form.html`)
  mainWindow.on("closed", (_) => {
    mainWindow = null;
  });
});
