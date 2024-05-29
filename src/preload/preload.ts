import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  sendIpcMessage: (channel: string, data: any) => {
		ipcRenderer.send(channel, data);
  }
});

