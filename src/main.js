const KEY_SERVER_URL = 'server_url'

const { app, BrowserWindow } = require('electron')
const { createMainWindow } = require('./window')
const { autoUpdater } = require('electron-updater')
const unhandled = require('electron-unhandled')
const Store = require('electron-store')
const prompt = require('electron-prompt')

unhandled()

autoUpdater.checkForUpdatesAndNotify()

const store = new Store()

let mainWindow = null

function startMainWindow() {
    if (BrowserWindow.getAllWindows().length !== 0) {
        // main window already exists
        return
    }

    if (store.has(KEY_SERVER_URL)) {
        mainWindow = createMainWindow(store.get(KEY_SERVER_URL))
        mainWindow.on('closed', () => {
            mainWindow = null
        })
    } else {
        prompt({
            title: 'Configure Server',
            label: 'Server URL:',
            inputAttrs: {
                type: 'url'
            },
            type: 'input'
        }).then((url) => {
            if (url === null) {
                app.quit()
            } else {
                store.set(KEY_SERVER_URL, url)
                startMainWindow()
            }
        })
    }
}

app.whenReady().then(startMainWindow)

app.on('activate', startMainWindow)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
