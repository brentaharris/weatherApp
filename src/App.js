import { useState } from "react";
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
import WeatherCard from "./components/WeatherCard";
import { Loading } from './components/Loading';
import { Error } from './components/Error';
import './App.css'

//TODO:
//two day forecast
//display pic and/or icons for weather conditions
//alerts
//refactor code

const App = () => {
  const [zipcode, setZipcode] = useState('');
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.weather.isLoading)
  const errMsg = useSelector((state) => state.weather.errMsg)

   const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(zipcode))
  };

  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (errMsg) {
    content = <Error errMsg={errMsg} />;
  } else {
    content = (
      <>
        <Row>
          <h3 style={styles.heading}>Current Forecast</h3>
        </Row>
        <Row>
          <Col>
            <WeatherCard />
          </Col>
        </Row>
      </>
    );
  }

  return (
    <main>
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
        {content}
      </Container>
    </main>
  );
};

export default App;

const styles = {
    container: {
    border: "2px solid black",
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
