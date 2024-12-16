const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }})

    win.loadURL(path.join('build', 'index.html'))
}

app.whenReady().then(createWindow)