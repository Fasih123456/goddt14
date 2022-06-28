import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FormText from "./FormText";

import React, {useState} from 'react';
import '../css/donatetoday.css'
import { FormGroup } from "react-bootstrap";

function HorizontalExample() {
  const [showhide, setShowhide]=useState('');
  const [showextraquestion,setShowextraquestion]=useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if(form.checkValidity() === false){
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleshowhide=(event)=>{
    const getuser = event.target.value;
    setShowhide(getuser);
  }

  const handleshowextraquestion=(event)=>{
    const getvalue = event.target.value;
    setShowextraquestion(getvalue);
  }

  return (
    <div className='main body ui container'>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className='group'>
        <Form.Group  as={Row} className="mb-3" controlId="intialform">
          <Form.Label column sm={6} style={{paddingLeft: "10px"}}>
            1. Are you a registered Vechile Owner
          </Form.Label>
          <Col sm={6} onChange={(e)=>handleshowextraquestion(e)}>
            <Form.Check
            required
              type="radio"
              label="Yes"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
              value='yes'
            />
            <Form.Check
                        required
              type="radio"
              label="No"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
              value='no'
            />
          </Col>
        </Form.Group>

        <FormText title="2. Where is your Vehicle Located" />

        <Form.Group as={Row} className="mb-3" controlId="intialform">
          <Form.Label column sm={8}>
            3. Is your vehicle mechanically drivable at this time? Would it be able to drive around the
            block right now? - This question is only pertaining to the mechanical condition. -
            Expired insurance or registration should not affect your answe
          </Form.Label>
          <Col sm={4} onChange={(e)=>handleshowextraquestion(e)}>
            <Form.Check 

            required
              type="radio"
              label="Yes"
              name="formHorizontalRados"
              id="formHorizontalRadios1"
              value='yes'
            />
            <Form.Check
             required
              type="radio"
              label="No"
              name="formHorizontalRados"
              id="formHorizontalRadios2"
              value='no'
            />
 
          </Col>
        </Form.Group>
        <Form.Check
        inline
        label="1"
        name="group1"
        type='checkbox'
        id='hi'
      />
              <Form.Check
        inline
        label="2"
        name="group1"
        type='checkbox'
        id='hi'
      />
        </div>

        {
          showextraquestion == 'no' && (
            <div className='group'>
            <FormText
              title="4. You have noted that you are not the registered owner of the vehicle. Please explain the
                circumstance of this car(Ex: Abdoned Vechile, on behalf of family member, power of
                attoerny)"
              placeholder="yo"
            />
          </div>
          )
        }

      <div className='group'>
      <h3 className='form-heading'>Doners information</h3>


        <FormText title="5. First Name (or Company Name)" />
        <FormText title="6. Last Name" />
        <FormText title="7. Street Address" />
        <FormText title="8. City or Town" />
        <FormText title="9. Province" />
        <FormText title="10. Postal Code" />
        <FormText title="11. Phone" />
        <FormText title="12. Phone Other" />
        <FormText title="13. Email Address" />
        <FormText title="14. Confirm Email Address" />
            </div>
            <div className='group'>
      <h3 className='form-heading'>Vehicle Information</h3>

        <Form.Group as={Row} className="mb-3" controlId="intialform">
          <FormText title="15. Year" />
          <FormText title="16. Make" />
          <FormText title="17. Model" />
          <FormText title="18. Color" />
          <FormText title="19. Seril Number(17 characters)" />
            <p>Please select all information that applies</p>
          <Form.Label column sm={2}>
            20. Vehicle Condition
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Runs Fine(no mechnical conerns)"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Wont start"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Dead Battery"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Engine Problems"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Transmission problems"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Brakes Sized"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Flat tier"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Disel"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="4x4"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="frame damage"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
                
            <Form.Check
              type="radio"
              label="flood damage"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="minor cosmetic damage"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="major cosmetic damage"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
          

          <Form.Label column sm={2}>
              Please select one:
          </Form.Label>

          <Form.Select onChange={(e)=>(handleshowhide(e))}>
              <option value="">----Select Option----</option>
              <option value='1' required>Recycle my car</option>
              <option value='2' required>Auction my car</option>
              <option value='3' required>Please decide for me</option>
          </Form.Select>

            
            {
              showhide === '1' && (
                <div className='hidden-div' id='recycle'>
                <h3>This option would be good for vehicles:</h3>
                <ul>- Of any age</ul>
                <ul>- Of any mechanical condition</ul>
                <ul>- This option would see your vehicle sent to an area agent that would either recycle or repurpose the vechile at their discrection</ul>
              </div>
              )
              }
              {
              showhide === '2' && (
                <div className='hidden-div' id='auction'>
                <h3>This option would be good for vehicles that:</h3>
                <ul>- are less than 10 years of age</ul>
                <ul>- have less than 200,000 kms</ul>
                <ul>- don't have any major mechanical problems</ul>
                <ul>- are currently drivable</ul>
              </div>
              )
            }
            {
              showhide === '3' && (
                <div className='hidden-div' id='unsure'>
                  <h3>This option would be suitable for Donors that:</h3>
                  <ul>- do not have a preference of what happens to their vehicle</ul>
                  <ul>- would like inTow to determine if it is suitable for auction/resale or recycle</ul>
                </div>
              )
            }


 
        </Form.Group>
        </div>
        <div className='group'>
        <Form.Group as={Row} className="mb-3" controlId="intialform">
        <h3 className='form-heading'> Towing Information</h3>
          <Form.Label column sm={2}>
            21. Can you drive this vechile?
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Yes"
              name="formHorizontalRados"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="No"
              name="formHorizontalRados"
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>


        <Form.Group as={Row} className="mb-3">

          <FormText title='22. Street Address'/>
          <FormText title='23. City or Town' />
          <FormText title='24. Province' />
          <FormText title='25. Postal Code' />
          <FormText title='26. Contact Name' />
          <FormText title='27. Phone Number' />
          <FormText title='28. Phone Other' />


        </Form.Group>
        </div>
        <div className="group">
        <Form.Group as={Row} className="mb-3" controlId="intialform">
        <h3 className='form-heading'>Charity</h3>
        <FormText title='29. Do you have an charity which you would like to donate your vehicle to?' />
        <FormText title='30. Would like to add any addional information' />
        

        <Form.Label column sm={2}>
            21. Would you like to remain anonymous
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Yes"
              name="formHoRados"
              id="foalRadios1"
            />
            <Form.Check
              type="radio"
              label="No"
              name="formHoRados"
              id="foalRadios2"
            />
          </Col>


          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Submit</Button>
          </Col>
        </Form.Group>
        </div>
      </Form>
    </div>
  );
}

export default HorizontalExample;
