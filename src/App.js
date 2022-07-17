import DisplayWeather from './DisplayWeather';
import { useState } from 'react';
import { Button, Container, Col, Row, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [zipcode, setZipcode] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    

  }

  return (
    <Container>
      <DisplayWeather />
      <Row>
        <Col xs='4' md='2'>
          <form onSubmit={handleSubmit}>
            <Input
              required
              placeholder='Enter zipcode...'
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
            />
            <Button  type='submit' color='primary'>Get&nbsp;Weather</Button>
          </form>
          
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
