import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./components/weatherSlice";
import {
  Button,
  Container,
  Col,
  Row,
  FormControl,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { baseUrl } from "./data/baseUrl";
import { apiKey } from "./data/apiKey";
import WeatherCard from "./components/WeatherCard";
import Alerts from "./components/Alerts";
import Testing from "./components/Testing";



const App = () => {
  const [zipcode, setZipcode] = useState("");
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

   // const requestUrl = `${baseUrl}/forecast.json?key=${apiKey}&q=${zipcode}&alerts=yes&days=3`;

  useEffect(() => {
    dispatch(fetchWeather())
  }, [dispatch])

 

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

        {true && (
          <Row>
            <Col>
              <WeatherCard />
            </Col>
          </Row>
        )}
      </Container>
      {/* <Alerts data={data} /> */}
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
