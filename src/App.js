import DisplayWeather from './DisplayWeather';
import { useState } from 'react';
import { Button, Container, Col, Row, Input, Form} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  const [zipcode, setZipcode] = useState();

  const handleSubmit = () => {

  }

  return (
    <Container>
      <DisplayWeather />
      <Row>
        <Col  xs='4' md='2'>
            <Form style={styles.container} onSubmit={handleSubmit}>
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

}
