'use strict';

/**
 * Module dependencies.
 */
var electron = require('electron');
var path = require('path');

// debug
require('electron-debug')({
    //showDevTools: true
});

var mainWindow;

/**
 * Create the main browser window.
 */
function createWindow() {
    mainWindow = new electron.BrowserWindow({
        width: 800,
        height: 600
    });

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
};

/**
 * App.
 */
electron.app.on('ready', createWindow);

electron.app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

electron.app.on('activate', function() {
    if (mainWindow === null) {
        createWindow();
    }
});
