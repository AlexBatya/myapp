import * as React from 'react';
import VideoStream from './components/video.components';
import './styles/style.css';

const App: React.FC = () => {
  const handleClose = () => {
		console.log(window.electron)
		if (window.electron) {
			window.electron.sendIpcMessage('close-window', {});  // добавлен второй аргумент, если требуется
		} else {
			console.error("Какое-то гейство");
		}
  };

  return (
		<div className="app">

			<i onClick={handleClose} className="close icon-close"></i>
			<VideoStream />

		</div>
  );
};

export default App;

