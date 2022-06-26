import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Homecontent from './home-content';
import WhyDonate from './WhyDonate';
import DonateToday from './DonateToday';
import FAQ from './FAQ';
import Contact from './Contact';

import '../css/App.css';

const App = () => {
    return(
        <div>
            <BrowserRouter>
              <React.Fragment>
                <Route path="/" exact  component={Homecontent} />
                <Route path="/WhyDonate" exact component={WhyDonate} />
                <Route path="/DonateToday" exact component={DonateToday} />
                <Route path="/FAQ" excat component={FAQ} />
                <Route path="/Contact" exact component={Contact} />
              </React.Fragment>
            </BrowserRouter>
        </div>
    );
};

export default App;