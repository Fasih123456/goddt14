import '../css/footer.css';
import { Col, Container, Row} from 'react-bootstrap';

const Footer = () => {
    return (
        <footer class="container-fluid text-center body">
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                    <p>Credit Where Its Due:</p>
                    <a style={{color: "black"}} href="https://www.flaticon.com/free-icons/community" title="community icons">Community icons created by KP Arts - Flaticon</a>
                    <a style={{color: "black"}} href="https://www.flaticon.com/free-icons/maintenance" title="maintenance icons">Maintenance icons created by Freepik - Flaticon</a>
                    <a style={{color: "black"}} href="https://www.flaticon.com/free-icons/maintenance" title="maintenance icons">Maintenance icons created by Freepik - Flaticon</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;