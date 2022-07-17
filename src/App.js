import { useState, useEffect } from 'react';
import { Button, Container, Col, Row, Input, Form} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import baseUrl from "./baseUrl";
import apiKey from "./apiKey";
import './app.css';


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
            {console.log(data)}
            <h3>{data.location.name}, {data.location.region}</h3>
            <p>Currently: It is {data.current["temp_f"]} and {data.current.condition.text}</p>
            <p>Feels like: {data.current['feelslike_f']}</p>
            <p>Wind: {data.current['wind_dir']} at {data.current["wind_mph"]}</p>
            <p>Last updated: {data.current['last_updated']}</p>
          </Col>
          <Col sm='6' className={ data.current.condition.text.toLowerCase() === 'sunny' ? 'sunny' : 'cloudy'}>
          </Col>
        </Row>}
      <Row>
        <Col>
            <Form onSubmit={handleSubmit}>
              <Input
                required
                style={styles.input}
                placeholder='Enter zipcode...'
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
              />
              <Button  type='submit' color='primary'>Get&nbsp;Weather</Button>
            </Form>
        </Col>
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
      backgroundImage: 'url("../sunny.jpg")'
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
  }
}
