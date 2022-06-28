import Header from './Header';
import Footer from './Footer';
import Form from "react-bootstrap/Form";
import FormText from '../components/FormText';

const Contact = () => {
    return (
        <div>
            <Header />
                <br />

                <div>
                    <Form>
                    <FormText title='First Name' name='firstnameCF'/>
                    <FormText title='Last Name' name='lastnameCF' />
                    <FormText title='Phone #' name='phonenumberCF' />
                    <FormText title='Location/City' name='locationCF' />
                    <div style={{paddingLeft: "15px"}}>
                    <p><label for="w3review">Your Message: </label></p>
                    <textarea id="w3review" name="w3review" rows="4" cols="100"></textarea>
                    <br /><br />
                    <input type="submit" value="Submit" />
                    </div>
                    </Form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;