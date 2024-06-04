import { app, BrowserWindow, Menu, ipcMain } from 'electron';

const header = (mainWindow: any) => {

	// закрыть окно
	ipcMain.on('close-window', () => {
		if (mainWindow) {
			mainWindow.close();
		}
  });

	// скрыть окно
	ipcMain.on('minimize-window', () => {
		if (mainWindow) {
			mainWindow.minimize();
		}
  });

	// развернуть окно
  ipcMain.on('maximize-window', () => {
		if (mainWindow) {
			if (mainWindow.isMaximized()) {
				mainWindow.unmaximize();
			} else {
				mainWindow.maximize();
			}
		}
  });		

}

export default header;
