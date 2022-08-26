import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import './PhotoViewer.css';
import Page from './components/layout/Page/';

const App = () => {
  return (
      <div className="wrapper">
        <body>      
            <Page/>              
        </body>
      </div>
  );
}

export default App;
