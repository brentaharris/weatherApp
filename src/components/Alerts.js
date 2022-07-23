import { Container, Row, Col } from "react-bootstrap";

const Alerts = ({ data }) => {
  const { alerts } = data;

  //  TODO
  // implement redux store
  // add accordian style drop down to display alerts (defaulted open when alert is active)

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
