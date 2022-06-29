import Header from './Header';
import Footer from './Footer';
import Cards from '../components/Cards';

import {Card, Button, Col, Container, Row} from 'react-bootstrap';

const WhyDonate = () => {
    return(
        <div>
            <Header />
            <div class="main body ui container">
                <p className='red-heading'>InTow Turns Your Burden In To Something Beautiful</p>
                <p>One of the simplest ways to donate a car is to find a decent home for it. Unexpected difficulties and headaches are frequently involved when selling or scrapping an automobile. We take great pride in providing a reliable alternative. You may relax after donating a car to one of our initiatives. In exchange for your donation to one of CDF's programs, you will get: </p>

                <div>
                    <Container>
                        <Row>
                            <Col ><Cards src='images/Icons/tool.png' title='Free Towing running or not' text='Regardless of where you are, you can get free towing'/></Col>
                            <Col><Cards src='images/Icons/money-flow.png' title='100% Tax Deductible' text='Greatest tax deduction available.'/></Col>
                            <Col style={{align: "left"}}><Cards src='images/Icons/group-users.png' title='Help Your Community' text='The assurance that your gift supports organizations supporting your communitys residents'/></Col>
                        </Row>
                    </Container>



                <a href="https://www.flaticon.com/free-icons/community" title="community icons">Community icons created by KP Arts - Flaticon</a>

                <a href="https://www.flaticon.com/free-icons/maintenance" title="maintenance icons">Maintenance icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/maintenance" title="maintenance icons">Maintenance icons created by Freepik - Flaticon</a>
            </div>
            </div>
            <Footer />

        </div>
    )
}

export default WhyDonate;