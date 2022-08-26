import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import  PhotoViewer from "./components/Photoviewer";
import './photoViewer.css';

const App = () => {
  return (
      <div  className="wrapper">
        <body>
          <h1>React Photo Viewer</h1>
        <PhotoViewer image={"https://picsum.photos/id/600/1600/900.jpg"} />
        </body>
      </div>
  );
}

export default App;
