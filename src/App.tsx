import React, {useState} from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import './photoviewer.css';
import Page from './components/layout/Page';
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Page";

const App = () => {
    return (
        <div className="">
            <body>
                <NavBar classNav="" links={[]} />
                <Page/>
                <Footer/>
            </body>
        </div>
    );
}

export default App;
