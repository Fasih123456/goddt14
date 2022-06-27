  import Header from './Header';
  import Footer from './Footer';
  import { ListGroup } from 'react-bootstrap';
  import Button from '../components/Button';
  import '../css/home-content.css';

  const Homecontent = () =>{
      return (
        <div >
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Sit amet risus nullam
                        eget felis eget. Elementum sagittis vitae et leo duis ut. Egestas erat
                        imperdiet sed euismod. Amet aliquam id diam maecenas. Integer malesuada nunc
                        vel risus commodo. Tortor consequat id porta nibh venenatis cras. Amet
                        volutpat consequat mauris nunc congue. Amet massa vitae tortor condimentum
                        lacinia quis vel. Odio pellentesque diam volutpat commodo sed egestas
                        egestas.
                      </p>
                      <div>
                        <ul>
                          <li>placeholder</li>
                          <li>placeholder</li>
                          <li>placeholder</li>
                          <li>placeholder</li>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Sit amet risus nullam
                        eget felis eget. Elementum sagittis vitae et leo duis ut. Egestas erat
                        imperdiet sed euismod. Amet aliquam id diam maecenas. Integer malesuada nunc
                        vel risus commodo. Tortor consequat id porta nibh venenatis cras. Amet
                        volutpat consequat mauris nunc congue. Amet massa vitae tortor condimentum
                        lacinia quis vel. Odio pellentesque diam volutpat commodo sed egestas
                        egestas.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Sit amet risus nullam
                        eget felis eget. Elementum sagittis vitae et leo duis ut. Egestas erat
                        imperdiet sed euismod. Amet aliquam id diam maecenas. Integer malesuada nunc
                        vel risus commodo. Tortor consequat id porta nibh venenatis cras. Amet
                        volutpat consequat mauris nunc congue. Amet massa vitae tortor condimentum
                        lacinia quis vel. Odio pellentesque diam volutpat commodo sed egestas
                        egestas.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, .{" "}
                          </p>
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                          <h2>Donating a Car to Your Charity of Choice</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam
                          </p>
                        </ListGroup.Item>
                        <ListGroup.Item action>
                          <h2>Donating a Car to Your Charity of Choice</h2>
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