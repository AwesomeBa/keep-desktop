const { app, BrowserWindow, BrowserView } = require('electron')

let mainWindow
let view

function createWindow() {

  mainWindow = new BrowserWindow({ width: 800, height: 600, frame: false })
  mainWindow.loadFile('index.html')

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  view = new BrowserView({ webPreferences: { nodeIntegration: false } })
  mainWindow.setBrowserView(view)
  view.setBounds({ x: 0, y: 30, width: 800, height: 700 - 30 })
  view.webContents.loadURL('https://keep.google.com')
  view.setAutoResize({ width: true, height: true })

  view.webContents.on('new-window', (event, url) => {
    event.preventDefault()
    view.webContents.loadURL(url)
  })

}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})