import { Accordion, Nav } from 'react-bootstrap';

const Accord = (props) => {
    return (
        <Accordion>
        <Accordion.Item eventKey={props.id}>
        <Accordion.Header>{props.title}</Accordion.Header>
        <Accordion.Body>
          {props.content}
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
    )
}

export default Accord;