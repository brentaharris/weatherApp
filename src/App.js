import { useState, useEffect } from 'react';
import { Button, Container, Col, Row, FormControl, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import baseUrl from "./data/baseUrl";
import apiKey from "./data/apiKey";
import WeatherCard from './components/WeatherCard';


const App = () => {
  const [zipcode, setZipcode] = useState('');
  const [query, setQuery] = useState('')
  const [data, setData] = useState('');

  useEffect( () => {
    const fetchData = async () => {
      try {
        const requestUrl = `${baseUrl}/current.json?key=${apiKey}&q=${zipcode}`
        const response = await fetch(requestUrl)
        const results = await response.json()
        setData(results);
        return data;
      } catch (error) {
        console.log(error)
      }
    }
    if(query){
      fetchData();
    }
  }, [query])

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(zipcode);
  }

  return (
    <Container style={styles.container}>
      <Row>
          <h3 style={styles.heading}>Today's Weather</h3>
      </Row>
      
      { data && 
        <Row>
          <Col sm='6'>
            <WeatherCard data={data}/>
          </Col>
        </Row>}
      <Row style={styles.row}>
        <Form onSubmit={handleSubmit}>
          <Col>
            <FormControl
              required
              type='text'
              style={styles.input}
              placeholder='Enter zipcode...'
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
            />
          </Col>
          <Col>
              <Button  type='submit' color='primary'>Get&nbsp;Weather</Button>
          </Col>
        </Form>
      </Row>
    </Container>
  );
}

export default App;


const styles = {
  container: {
      border: '2px solid black',
      borderRadius: '10px',
      margin: '3rem',
      overflow: 'hidden',
  },
  heading: {
      color: '#2d3436',
      backgroundColor: '#b2bec3',
      textAlign: 'left',
      paddingTop: '5px',
      paddingBottom: '5px'
  },
  input: {
    width: '50%'
  },
  row: {
    marginBottom: '10px'
  }
}
