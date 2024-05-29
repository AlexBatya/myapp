import { app, BrowserWindow, Menu, ipcMain } from 'electron';
import * as path from 'path';

let mainWindow: BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		frame: false,
		webPreferences: {
			preload: process.cwd() + '/dist/preload.js',
		},
  });

  // Обработка пути к index.html
  mainWindow.loadFile('./dist/index.html');

  // Menu.setApplicationMenu(null);
  //
  mainWindow.on('closed', () => {
		mainWindow = null;
  });
}


app.on('ready', () => {
	createWindow();

	ipcMain.on('close-window', () => {
		if (mainWindow) {
			mainWindow.close();
		}
  });
})

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

