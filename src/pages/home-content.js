  import Header from './Header';
  import Footer from './Footer';
  import { ListGroup } from 'react-bootstrap';
  import Button from '../components/Button';
  import '../css/home-content.css';

  const Homecontent = () =>{
      return (
        <div >
          inTow
          <Header />
          <div class="main body ui container">
            <img
              src="images/1.jpg"
              style={{ width: "100%", height: "35vw", marginBottom: "20px" }}
            />
            <div>
              <div class="row">
                <div class="col-sm-8">
                  <div class="panel panel-primary text-left" style={{ borderColor: "white" }}>
                    <div
                      class="panel-heading"
                      style={{ color: "black", backgroundColor: "white", borderColor: "white" }}
                    >
                      <p className='red-heading'>
                        Donate a Car Today!
                      </p>
                    </div>
                    <div class="panel-body">
                      <p>
                      We make it easy for you and the organisation you care about to donate a car. We make giving old cars, removing cars, recycling cars, or just junking cars a simple procedure for you and the charity that will benefit. Every gift is an honour for us to handle, and we're dedicated to giving our best service at every turn.
                      </p>
                      <div>
                        <ul>
                          <li>Free towing or Pick-up in Every Province</li>
                          <li>Simple online form</li>
                          <li>Numerous Charities to Pick From</li>
                          <li>Every gift is guaraneteed a tax receipt</li>
                        </ul>
                      </div>

                      <Button />
                    </div>
                    <div
                      class="panel-footer"
                      style={{ backgroundColor: "white", borderTop: "0px" }}
                    ></div>
                  </div>

                  <div class="panel panel-primary text-left" style={{ borderColor: "white" }}>
                    <div
                      class="panel-heading"
                      style={{ color: "black", backgroundColor: "white", borderColor: "white" }}
                    >
                      <p className='red-heading'>
                        Your Dependable Choice
                      </p>
                    </div>
                    <div class="panel-body">
                      <p>
                      Your automotive contribution has value in terms of money and sentiment. We promise to uphold both as part of our donor support commitment. The donation of your charity automobile will be carefully managed for you with honesty and attention to timely details so that you may give with ease to the cause that is most important to you.
                      </p>

                    </div>
                    <div
                      class="panel-footer"
                      style={{ backgroundColor: "white", borderTop: "0px" }}
                    ></div>
                  </div>

                  <div class="panel panel-primary text-left" style={{ borderColor: "white" }}>
                    <div
                      class="panel-heading"
                      style={{ color: "black", backgroundColor: "white", borderColor: "white" }}
                    >
                      <p className='red-heading'>
                      Donate Now and Make a Difference
                      </p>
                    </div>
                    <div class="panel-body">
                      <p>
                      The charity that means the most to you benefits from your used automobile contributions. Through Donate a Car Canada, you may choose to donate your car to ANY recognised Canadian charity, and we'll see to it that they have a simple time accepting it. Since there are no costs associated with participating in our gift-receiving programme, your charity of choice may use every dollar you donate to support the important work they are doing on behalf of Canadians just like you.
                      </p>
                    <Button />
                    </div>
                    <div
                      class="panel-footer"
                      style={{ backgroundColor: "white", borderTop: "0px" }}
                    ></div>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="panel panel-success">
                    <div id="panel-heading-row-two">Why Donate with us</div>
                    <div class="panel-footer">
                      <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item action href="#link1">
                          <h2>Donating a Car to Your Charity of Choice</h2>
                          <p>
                          We make it simple to donate an automobile in Canada. Emails and clear communication are our top priorities, and we will work rapidly to resolve any concerns and inquiries.
                          </p>
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                          <h2>Great way to donate your vehicle to charity!</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam
                          </p>
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3">
                          <h2>Donate an Old Vehicle</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam{" "}
                          </p>
                        </ListGroup.Item>
                      </ListGroup>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
          <Footer />
        </div>
      );
  }

  export default Homecontent;