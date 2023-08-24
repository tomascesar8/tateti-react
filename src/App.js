import Board from "./Components/Board/Board";
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'react-bootstrap';
import shortid from "shortid";
import CommentForm from "./Components/CommentForm/CommentForm";




function App() {
  return (
    <Container fluid>
      <Row>
        <Col className="bg-primary text-warning fs-5">
        {shortid.generate()}
          <Board/>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <CommentForm/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
