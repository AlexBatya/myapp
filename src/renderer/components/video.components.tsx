import React, { useEffect, useRef, useState } from 'react';
import '../styles/video.styles.css'
import '../fonts/fonts.css'
const ffmpeg = require('@ffmpeg/ffmpeg');

const { createFFmpeg, fetchFile } = ffmpeg;

const VideoStream: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
		const loadFFmpeg = async () => {
			await createFFmpeg({ log: true }).load();
			setIsLoaded(true);
		};

		loadFFmpeg();
  }, []);

  const startStream = async () => {
		if (!isLoaded) return;

		const inputUrl = 'rtsp://admin:admin@192.168.0.99:80/path'; // Замените на ваш URL камеры
		const response = await fetch(inputUrl);
		const data = await response.blob();
		const file = new File([data], 'input.mp4', { type: 'video/mp4' });

		const ffmpeg = createFFmpeg({ log: true });
		await ffmpeg.load();
		ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(file));
		await ffmpeg.run('-i', 'input.mp4', 'output.mp4');

		const dataOutput = ffmpeg.FS('readFile', 'output.mp4');
		const videoBlob = new Blob([dataOutput.buffer], { type: 'video/mp4' });
		const videoURL = URL.createObjectURL(videoBlob);

		if (videoRef.current) {
			videoRef.current.src = videoURL;
			videoRef.current.play();
		}
  };

  return (
		<div className = "video">
			<button className = "btmStart" onClick={startStream} disabled={!isLoaded}>
				Начать поток
			</button>
			<video className = "videoStream" ref={videoRef} controls />
		</div>
  );
};

export default VideoStream;

