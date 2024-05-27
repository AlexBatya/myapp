import * as React from 'react';
import goos from './img/goos.jpg';

const App: React.FC = () => {
  console.log('Image path:', goos);
  return (
    <div className="app">
      <h1>Соси писУн</h1>
      <img src={goos} alt="Goose" />
    </div>
  );
};

export default App;

