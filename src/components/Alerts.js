import { Container, Row, Col } from "react-bootstrap";

const Alerts = ({ data }) => {
  const { alerts, location } = data;

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
