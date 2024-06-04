import React, { useState } from 'react';
import './styles/style.css';

import VideoStream from './components/video.components'
import Header from './components/header.components';

const App: React.FC = () => {
  const [showHeader, setShowHeader] = useState(false);

  const handleMouseEnter = () => {
		setShowHeader(true);
  };

  const handleMouseLeave = () => {
		setShowHeader(false);
  };

  const style: any = {
		borderRadius: '5px',
		background: 'rgba(0, 0, 0, 0)'
  };

  return (
		<div
			style={style}
			className="app"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<Header />
			{/* Other components */}
		</div>
  );
};

export default App;

