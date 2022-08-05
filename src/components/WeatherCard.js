import { Card, Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux/es/exports";

const WeatherCard = () => {
  const city = useSelector((state) => state.weather.city)
  const state = useSelector((state) => state.weather.state)
  const currTemp = useSelector((state) => state.weather.currTemp)
  const tempHi = useSelector((state) => state.weather.tempHi)
  const tempLow = useSelector((state) => state.weather.tempLow)
  const currCondition = useSelector((state) => state.weather.currCondition)
  const windSpeed = useSelector((state) => state.weather.windSpeed)
  const humidity = useSelector((state) => state.weather.humidity)
  const visibilityRange = useSelector((state) => state.weather.visibilityRange)

  if (city) {
    return (
      <Container>
        <Row style={styles.relative}>
          <Card.Text style={styles.cardText}>
            {city}, {state}
          </Card.Text>
          <Card.Text style={styles.absolute}>
            {" "}
            {Math.round(tempHi)}&#176; /{" "}
            {Math.round(tempLow)}&#176;
          </Card.Text>
        </Row>
        <Row>
          <Col sm="3">
            <Card style={styles.card}>
              <Card.Text style={styles.cardTextLg}>
                {Math.round(currTemp)}&#176;F
              </Card.Text>
              <Card.Text style={styles.cardText}>Currently</Card.Text>
            </Card>
          </Col>
          <Col>
            <Card style={styles.card}>
              {currCondition.length > 13 ? (
                <Card.Text style={styles.conditionalText}>
                  {currCondition}
                </Card.Text>
              ) : (
                <Card.Text style={styles.cardTextLg}>
                  {currCondition}
                </Card.Text>
              )}
            </Card>
          </Col>
          <Col sm="3">
            <Card style={styles.card}>
              <Card.Text style={styles.cardTextLg}>
                {Math.round(currTemp)}&#176;F
              </Card.Text>
              <Card.Text style={styles.cardText}>Feels Like</Card.Text>
            </Card>
          </Col>
          <Col sm="3">
            <Card style={styles.card}>
              <Card.Text style={styles.cardTextLg}>
                {Math.round(windSpeed)} mph
              </Card.Text>
              <Card.Text style={styles.cardText}>Wind Speed</Card.Text>
            </Card>
          </Col>
        </Row>
        <Row>
          <Card.Text style={styles.cardTextSm}>
            Humidity: {humidity}% -- Visibility: {visibilityRange}{" "}
            miles
          </Card.Text>
        </Row>
      </Container>
    );
  }
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
    fontSize: 28,
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
    fontSize: 22,
    color: "white",
    textAlign: "center",
    marginBottom: 2
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
