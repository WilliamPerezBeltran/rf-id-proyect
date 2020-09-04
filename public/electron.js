const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;


const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({width: 900, height: 680,webPreferences: {     nodeIntegration: true   } });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

const sqlite3 = require('sqlite3');
var db = new sqlite3.Database(':memory:');
db.serialize(function () {
  db.run("CREATE TABLE Products (name, barcode, quantity)");

  db.run("INSERT INTO Products VALUES (?, ?, ?)", ['product001', 'xxxxx', 20]);
  db.run("INSERT INTO Products VALUES (?, ?, ?)", ['product002', 'xxxxx', 40]);
  db.run("INSERT INTO Products VALUES (?, ?, ?)", ['product003', 'xxxxx', 60]);

  db.each("SELECT * FROM Products", function (err, row) {
    console.log(row);
  });
});
db.close();

const { ipcMain } = require('electron') 


ipcMain.on('example', async(event, arg) => {
  console.log(event) // prints "ping"
  try {
    event.sender.send('asynReply','Main said: Async message received')
  } catch (error) {
    console.log('ipcmain error')
    console.log(error)
  }
})
