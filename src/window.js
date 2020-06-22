const { BrowserWindow } = require('electron')
const windowStateKeeper = require('electron-window-state')

exports.createMainWindow = (serverUrl) => {
    let mainWindowState = windowStateKeeper({
        defaultWidth: 1000,
        defaultHeight: 800
    })

    let mainWindow = new BrowserWindow({
        x: mainWindowState.x,
        y: mainWindowState.y,
        width: mainWindowState.width,
        height: mainWindowState.height,
        backgroundColor: '#25252F',
        webPreferences: {
            nodeIntegration: false
        }
    })

    mainWindow.webContents.on('will-prevent-unload', (event) => {
        event.preventDefault()
    })

    mainWindowState.manage(mainWindow)

    mainWindow.loadURL(serverUrl)
    return mainWindow
}