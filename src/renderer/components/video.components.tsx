import React from 'react';

const VideoStream: React.FC<any> = () => {
	return (
		<video src="http://localhost:5000/" controls autoPlay></video>
	)
}

export default VideoStream;
