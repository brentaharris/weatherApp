import { useState, useEffect } from "react";
import {
  Button,
  Container,
  Col,
  Row,
  FormControl,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import baseUrl from "./data/baseUrl";
import apiKey from "./data/apiKey";
import WeatherCard from "./components/WeatherCard";
import Alerts from "./components/Alerts";
import TwoDayForecast from "./components/TwoDayForecast";

const App = () => {
  const [zipcode, setZipcode] = useState("");
  const [query, setQuery] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestUrl = `${baseUrl}/forecast.json?key=${apiKey}&q=${zipcode}&alerts=yes&days=5`;
        const response = await fetch(requestUrl);
        const results = await response.json();
        setData(results);
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    if (query) {
      fetchData();
    }
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(zipcode);
  };

  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Form onSubmit={handleSubmit}>
          <Row style={styles.row}>
            <Col sm="3">
              <FormControl
                required
                type="text"
                style={styles.input}
                placeholder="Enter zipcode..."
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
              />
            </Col>
            <Col>
              <Button type="submit" color="primary">
                Get&nbsp;Weather
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <Container style={styles.container}>
        <Row>
          <h3 style={styles.heading}>Current Forecast</h3>
        </Row>

        {data && (
          <Row>
            <Col>
              <WeatherCard data={data} />
            </Col>
          </Row>
        )}
      </Container>
      <Alerts data={data} />
      <Container>
        <TwoDayForecast data={data} />
      </Container>
    </>
  );
};

export default App;

const styles = {
  container: {
    border: "2px solid gray",
    borderRadius: "10px",
    overflow: "hidden",
    marginTop: "1rem",
    background: `linear-gradient(to right, #0984e3, #53a9eb)`,
  },
  heading: {
    color: "white",
    backgroundColor: "blue",
    textAlign: "center",
    paddingTop: "5px",
    paddingBottom: "5px",
  },
  input: {
    width: "100%",
  },
  row: {
    marginBottom: "10px",
  },
};
