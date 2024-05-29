
interface ElectronAPI {
  sendIpcMessage: (channel: string, data: any) => void;
}

interface Window {
  electron: ElectronAPI;
}
