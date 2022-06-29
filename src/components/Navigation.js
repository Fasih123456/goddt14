import React from 'react';
import {Link} from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import '../css/navigation.css';

class Navigation extends React.Component{


    constructor(props){
        super(props);

        let width = window.innerWidth;
        console.log(width);
        this.state = {};
        
        if(width > 900){
            this.state.renderComponent = (
                <React.Fragment>
                <li class="link-item"><a href="#"><Link to="/" class='active item' id='page1'>Home</Link></a></li>
                <li ><a class='link-item'><Link to="/WhyDonate" class='item' id='page2'>Why Donate</Link></a></li>
                <li ><a class='link-item'><Link to="/DonateToday" class='item' id='page3'>Donate Today</Link></a></li>
                <li ><a class='link-item'><Link to="/FAQ" class='item' id='page4'>FAQ</Link></a></li>
                <li ><a class='link-item'><Link to="/Contact" class='item' id='page5'>Contact</Link></a></li>
                </React.Fragment>
            );
        }else {
            this.state.renderComponent = (
                <React.Fragment>
                <NavDropdown title="Menu" id="nav-dropdown">
                <li  class="link-item"><a href="#" ><Link to="/" class='active item' id='page1' style={{color: "black"}}>Home</Link></a></li>
                <li ><a class='link-item'><Link to="/WhyDonate" class='item' id='page2' style={{color: "black"}}>Why Donate</Link></a></li>
                <li ><a class='link-item'><Link to="/DonateToday" class='item' id='page3' style={{color: "black"}}>Donate Today</Link></a></li>
                <li ><a class='link-item'><Link to="/FAQ" class='item' id='page4' style={{color: "black"}}>FAQ</Link></a></li>
                <li ><a class='link-item'><Link to="/Contact" class='item' id='page5' style={{color: "black"}}>Contact</Link></a></li>
    
                </NavDropdown>
            </React.Fragment>
            );
        }
    }

    componentDidMount(){

    }

    componentDidUpdate(){
        const currentLocation = window.location.href;
        const BASEURL = 'http://localhost:3000';
        console.log(currentLocation);

        switch(currentLocation){
            case `${BASEURL}/Contact`:
                document.getElementById('page5').classList.add('active');

                document.getElementById('page1').classList.remove('active');
                document.getElementById('page2').classList.remove('active');
                document.getElementById('page3').classList.remove('active');
                document.getElementById('page4').classList.remove('active');
                break;
            case `${BASEURL}/WhyDonate`:
                document.getElementById('page2').classList.add('active');

                document.getElementById('page1').classList.remove('active');
                document.getElementById('page3').classList.remove('active');
                document.getElementById('page4').classList.remove('active');
                document.getElementById('page5').classList.remove('active');
                break;
            case `${BASEURL}/DonateToday`:
                document.getElementById('page3').classList.add('active');
    
                document.getElementById('page1').classList.remove('active');
                document.getElementById('page2').classList.remove('active');
                document.getElementById('page4').classList.remove('active');
                document.getElementById('page5').classList.remove('active');
                break;
            case `${BASEURL}`:
                document.getElementById('page1').classList.add('active');
    
                document.getElementById('page2').classList.remove('active');
                document.getElementById('page3').classList.remove('active');
                document.getElementById('page4').classList.remove('active');
                document.getElementById('page5').classList.remove('active');
                break;
            
            default:
                document.getElementById('page1').classList.add('active');
        }
    }

    render(){

    return (
        <React.Fragment>
        {this.state.renderComponent}

        </React.Fragment>

    );

    }
}

export default Navigation;