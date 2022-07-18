import { Container, Row, Col } from "react-bootstrap";

const Alerts = ({ alerts }) => {
  return (
    <Container>
      <Row>
        {alerts?.length ? (
          <Col>ACTIVE WEATHER ALERTS</Col>
        ) : (
          <Col>No active weather alerts in this area.</Col>
        )}
      </Row>
    </Container>
  );
};

export default Alerts;
