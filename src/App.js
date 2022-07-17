import { useState, useEffect } from 'react';
import { Button, Container, Col, Row, Input, Form} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import baseUrl from "./baseUrl";
import apiKey from "./apiKey";


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
      { data && 
      <Row>
        <Col>
          <h1 style={styles.heading}>Today's weather</h1>
          {console.log(data)}
          <h3>{data.location.name}, {data.location.region}</h3>
          <p>Currently: It is {data.current["temp_f"]} and {data.current.condition.text}</p>
          <p>Feels like: {data.current['feelslike_f']}</p>
          <p>Wind: {data.current['wind_dir']} at {data.current["wind_mph"]}</p>
          <p>Last updated: {data.current['last_updated']}</p>
        </Col>
      </Row>}
      <Row>
        <Col>
            <Form onSubmit={handleSubmit}>
              <Input
                required
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
      padding: '1rem',
      margin: '3rem'
  },
  heading: {
      color: 'red',
      textAlign: 'center'
  }
}


// return (
//   <Container>
//     {campsite && <SubHeader current={campsite.name} detail={true} />}
//     <Row>{content}</Row>
//   </Container>
// );

// const finalData = {
//   currTemp: data.current["temp_f"],
//   currDescriptionText: data.current.condition.text,
//   feelsLike: data.current['feelslike_f'],
//   windDir: data.current['wind_dir'],
//   windSpeed: data.current["wind_mph"],
//   lastUpdated: data.current['last_updated']
// }