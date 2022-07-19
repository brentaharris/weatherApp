import { Row, Col, Card } from "react-bootstrap";
const TwoDayForecast = ({ data }) => {
  const { forecast, location } = data;

  const dayOne = forecast.forecastday[1];
  const dayTwo = forecast.forecastday[2];

  return (
    <Row>
      <Col>
        <h2>{location.name} two day forecast</h2>
        <Card.Text>
          {dayOne.date}, {dayOne.day["maxtemp_f"]} temp HI,{" "}
          {dayOne.day["mintemp_f"]} temp low and {dayOne.day.condition.text}
        </Card.Text>
        <Card.Text>
          {dayTwo.date}, {dayTwo.day["maxtemp_f"]} temp HI,{" "}
          {dayTwo.day["mintemp_f"]} temp low and {dayTwo.day.condition.text}
        </Card.Text>
        <Card.Text></Card.Text>
      </Col>
    </Row>
  );
};

export default TwoDayForecast;
