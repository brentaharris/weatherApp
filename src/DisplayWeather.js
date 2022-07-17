import { Row, Col, Container } from 'reactstrap';

const DisplayWeather = () => {


    return(
        <Container style={styles.container}>
            {true && 
                <Row>
                    <Col>
                        <h1 style={styles.heading}>Today's weather</h1>
                        <p>currTemp: </p>
                        <p>currDescriptionText: </p>
                        <p>feelsLike: </p>
                        <p>windDir: </p>
                        <p>windSpeed: </p>
                        <p>lastUpdated: </p>
                    </Col>
                </Row>
            }
        </Container>
    )
}

export default DisplayWeather;


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