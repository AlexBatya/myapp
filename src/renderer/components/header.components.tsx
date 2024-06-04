import React, { useState, useEffect } from 'react';
import '../fonts/fonts.css';
import '../styles/header.styles.css';
import '../styles/style.css';

const Header: React.FC<any> = () => {
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => {
		setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			console.log(event.clientY)
			// Проверка, находится ли курсор внутри приложения
			if (event.clientY < 50) {
				setVisible(true);
			} else {
				setVisible(false);
			}
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
  }, []);

  return (
		<header
			className={`header__body ${visible ? 'visible' : ''}`}
		>
			<div className="header__body__container">
				<div className="controll">
					<Turn />
					<Unwrap />
					<Close />
				</div>
			</div>
		</header>
  );
};

const Close: React.FC<any> = () => {
  const handleClose = () => {
		if (window.electron) {
			window.electron.sendIpcMessage('close-window', {});
		} else {
			console.error("Electron API not available");
		}
  };

  return (
		<i onClick={handleClose} className="close icon-close"></i>
  );
};

const Turn: React.FC<any> = () => {
  const handleMinimize = () => {
		if (window.electron) {
			window.electron.sendIpcMessage('minimize-window', {});
		} else {
			console.error("Electron API not available");
		}
  };

  return (
		<i onClick={handleMinimize} className="turn icon-minus"></i>
  );
};

const Unwrap: React.FC<any> = () => {
  const handleMaximize = () => {
		if (window.electron) {
			window.electron.sendIpcMessage('maximize-window', {});
		} else {
			console.error("Electron API not available");
		}
  };

  return (
		<i onClick={handleMaximize} className="turn icon-checkbox"></i>
  );
};

export default Header;

