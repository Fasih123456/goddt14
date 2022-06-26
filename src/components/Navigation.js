import React from 'react';
import {Link} from 'react-router-dom';
import '../css/navigation.css';

class Navigation extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const currentLocation = window.location.href;
        const BASEURL = 'http://localhost:3000';
        
        switch(currentLocation){
            
            case `${BASEURL}/Contact`:
                document.getElementById('page3').classList.add('active');

                document.getElementById('page1').classList.remove('active');
                document.getElementById('page2').classList.remove('active');
                document.getElementById('page4').classList.remove('active');
                break;
            case `${BASEURL}/Work`:
                document.getElementById('page2').classList.add('active');

                document.getElementById('page1').classList.remove('active');
                document.getElementById('page3').classList.remove('active');
                document.getElementById('page4').classList.remove('active');
                break;
            case `${BASEURL}/Cost`:
                document.getElementById('page4').classList.add('active');
    
                document.getElementById('page1').classList.remove('active');
                document.getElementById('page2').classList.remove('active');
                document.getElementById('page3').classList.remove('active');
                break;
            case `${BASEURL}`:
                document.getElementById('page1').classList.add('active');
    
                document.getElementById('page2').classList.remove('active');
                document.getElementById('page3').classList.remove('active');
                document.getElementById('page4').classList.remove('active');
                break;
            
            default:
                document.getElementById('page1').classList.add('active');
        }
    }

    render(){
    return (
        <React.Fragment>
            <li class="link-item active"><a href="#"><Link to="/" class='active item' id='page1'>Home</Link></a></li>
            <li ><a class='link-item'><Link to="/WhyDonate" class='item' id='page2'>Why Donate</Link></a></li>
            <li ><a class='link-item'><Link to="/DonateToday" class='item' id='page3'>Donate Today</Link></a></li>
            <li ><a class='link-item'><Link to="/FAQ" class='item' id='page4'>FAQ</Link></a></li>
            <li ><a class='link-item'><Link to="/Contact" class='item' id='page5'>Contact</Link></a></li>
        </React.Fragment>
    );
    }
}

export default Navigation;