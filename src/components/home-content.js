import Header from '../pages/Header';

const Homecontent = () =>{
    return (
      <div>
      <Header />
        <div class='main body ui container'>
        <img src='images/1.jpg' style={{width:"100%" , maxHeight:'550px', marginBottom: '20px'}}/>
        <div >   

          <div class="row">
            <div class="col-sm-8">
        
              <div class="panel panel-primary text-left">
                <div class="panel-heading">Donate</div>
                <div class="panel-body">
                  <p>
                    It was a weird concept. Why would I really need to generate a random paragraph? Could I actually learn something from doing so? All these questions were running through her head as she pressed the generate button. To her surprise, she found what she least expected to see.
                  </p>
                  <div>
                    <ul>
                      <li>placeholder</li>
                      <li>placeholder</li>
                      <li>placeholder</li>
                      <li>placeholder</li>
                      <li>placeholder</li>
                      <li>placeholder</li>
                      <li>placeholder</li>
                    </ul>
                  </div>
        
        
                </div>
                <div class="panel-footer">Buy 50 mobiles and get a gift card</div>
              </div>
            </div>
        
        
            <div class="col-sm-4"> 
              <div class="panel panel-success">
                <div class="panel-heading">BLACK FRIDAY DEAL</div>
                <div class="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style={{width:"100%"}} alt="Image" /> </div>
                <div class="panel-footer">Buy 50 mobiles and get a gift card</div>
              </div>
            </div>
        
            
          </div>
          
        </div><br />
        
        
        

        
        
        </div></div>
    );
}

export default Homecontent;