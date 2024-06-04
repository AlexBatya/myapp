import { app, BrowserWindow, Menu, ipcMain } from 'electron';
import * as path from 'path';

import header from './routes/header.routes'

let mainWindow: BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		frame: false,
		icon: process.cwd() + '/dist/img/icon.ico',
		webPreferences: {
			preload: process.cwd() + '/dist/preload.js',
		},
  });

  // Обработка пути к index.html
  mainWindow.loadFile('./dist/index.html');

  mainWindow.on('closed', () => {
		mainWindow = null;
  });
}

app.on('ready', () => {
	createWindow(); // создание главного окна

	header(mainWindow) // Команды из заголовка
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

