import { Card, Container, Row, Col } from "react-bootstrap";
// import Testing from "./Testing";

const WeatherCard = ({ data }) => {
  const { current, forecast, location } = data;
  // console.log(data);

  return (
    <Container>
      {/* <Testing /> */}
      <Row style={styles.relative}>
        <Card.Text style={styles.cardText}>
          {location.name}, {location.region}
        </Card.Text>
        <Card.Text style={styles.absolute}>
          {" "}
          {Math.round(forecast.forecastday[0].day["maxtemp_f"])}&#176; /{" "}
          {Math.round(forecast.forecastday[0].day["mintemp_f"])}&#176;
        </Card.Text>
      </Row>
      <Row>
        <Col sm="3">
          <Card style={styles.card}>
            <Card.Text style={styles.cardTextLg}>
              {Math.round(current["temp_f"])}&#176;F
            </Card.Text>
            <Card.Text style={styles.cardText}>Currently</Card.Text>
          </Card>
        </Col>
        <Col>
          <Card style={styles.card}>
            {current.condition.text.length > 13 ? (
              <Card.Text style={styles.conditionalText}>
                {current.condition.text}
              </Card.Text>
            ) : (
              <Card.Text style={styles.cardTextLg}>
                {current.condition.text}
              </Card.Text>
            )}
          </Card>
        </Col>
        <Col sm="3">
          <Card style={styles.card}>
            <Card.Text style={styles.cardTextLg}>
              {Math.round(current["feelslike_f"])}&#176;F
            </Card.Text>
            <Card.Text style={styles.cardText}>Feels Like</Card.Text>
          </Card>
        </Col>
        <Col sm="3">
          <Card style={styles.card}>
            <Card.Text style={styles.cardTextLg}>
              {Math.round(current["wind_mph"])} mph
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
  absolute: {
    position: "absolute",
    top: 5,
    left: 0,
    color: "white",
    fontSize: 24,
  },
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
    lineHeight: "1.2",
  },
  cardTextSm: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  conditionalText: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    lineHeight: "1.2",
  },
  relative: {
    position: "relative",
  },
};
