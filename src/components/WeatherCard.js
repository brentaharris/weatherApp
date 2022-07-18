import { Card, Container, Row, Col } from "react-bootstrap";

const WeatherCard = ({ data }) => {
  const { current, location } = data;
  console.log(data);

  return (
    <Container>
      <Row>
        <Card.Text style={styles.cardText}>
          {location.name}, {location.region}
        </Card.Text>
      </Row>
      <Row>
        <Col sm="3">
          <Card style={styles.card}>
            <Card.Text style={styles.cardTextLg}>
              {current["temp_f"]}&#176;F
            </Card.Text>
            <Card.Text style={styles.cardText}>Currently</Card.Text>
          </Card>
        </Col>
        <Col>
          <Card style={styles.card}>
            <Card.Text style={styles.cardTextLg}>
              {current.condition.text}
            </Card.Text>
            <Card.Text style={styles.cardText}>Condition</Card.Text>
          </Card>
        </Col>
        <Col sm="3">
          <Card style={styles.card}>
            <Card.Text style={styles.cardTextLg}>
              {current["feelslike_f"]}&#176;F
            </Card.Text>
            <Card.Text style={styles.cardText}>Feels Like</Card.Text>
          </Card>
        </Col>
        <Col sm="3">
          <Card style={styles.card}>
            <Card.Text style={styles.cardTextLg}>
              {current["wind_mph"]} mph
            </Card.Text>
            <Card.Text style={styles.cardText}>Wind Speed</Card.Text>
          </Card>
        </Col>
      </Row>
      <Row>
        <Card.Text style={styles.cardTextSm}>
          Humidity: {current.humidity}% -- Visibility: {current["vis_miles"]}{" "}
          miles
        </Card.Text>
      </Row>
    </Container>
  );
};

export default WeatherCard;

const styles = {
  card: {
    height: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
    borderRadius: "10px",
    backgroundColor: "transparent",
    border: "none",
  },
  cardHeading: {
    textAlign: "left",
    fontSize: 25,
  },
  cardText: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
  },
  cardTextLg: {
    fontSize: 45,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  cardTextSm: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
};
