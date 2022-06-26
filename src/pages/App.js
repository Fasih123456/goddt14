import React from 'react';
import Homecontent from './home-content';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import '../css/App.css';

const App = () => {
    return(
        <div>
            <BrowserRouter>
              <React.Fragment>
                <Route path="/" exact  component={Homecontent} />
              </React.Fragment>
            </BrowserRouter>
        </div>
    );
};

export default App;