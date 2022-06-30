import Header from './Header';
import Footer from './Footer';
import Form from "react-bootstrap/Form";
import FormText from '../components/FormText';
import {Button} from 'react-bootstrap';
import ContactForm from '../components/ContactForm';

import '../css/contact.css';
import React from 'react';

const Contact = () => {

    return (
        <div>
            <Header />
            <div className='main body ui container'>
                <p className='red-heading' style={{margin: "0px"}}>Contact Us</p>
                <p className='red-heading' style={{paddingTop: "0px"}}>Donate a Car to the Charity of Your Choice</p>
                <div>
                <p>Accepting Vehicle Donations in Every Province</p>
                <p style={{wordSpacing: "4px"}}>
                    Keeping our overhead low is important as it ensures a maximum donation amount for your charity. Would you consider connecting with us via our online submission form? Simply click the “Donate” button below! Thank you!
                    <br></br><br></br>
                    Toll Free: 1-1234-1234
                    <br></br>
                    Phone: 123-123-1234
                    <br></br>
                    Fax: 1-123-123-123
                    <br></br>
                    Mailing Address: 123 Hudson Bay Drive
                </p>
                </div> 
                <br />

                <div>
                    <Form>
                        <h1>Contact Form</h1>
                    <FormText title='First Name' name='firstnameCF'/>
                    <FormText title='Last Name' name='lastnameCF' />
                    <FormText title='Phone #' name='phonenumberCF' />
                    <FormText title='Email Address' name='locationCF' />
                    <div style={{paddingLeft: "15px"}}>
                    <p><label for="w3review">Your Message: </label></p>
                    <textarea id="w3review" name="w3review" rows="4" cols={window.innerWidth > 900 ? "100" : "50"}></textarea>
                    <br /><br />
                     
                    <Button type='submit' variant="secondary">Submit</Button>{' '}
                    <br />
                    </div>
                    </Form>
                </div>
            </div>


            <Footer />
        </div>
    )
    
}

export default Contact;