import { Card } from 'react-bootstrap';

const WeatherCard = ({ data }) => {
  const { current, location } = data;
//   console.log(data)

  return(
    <Card>
        <Card.Title style={styles.heading}>
            {location.region}
        </Card.Title>
        <Card.Subtitle style={styles.heading}>
            {location.name}
        </Card.Subtitle>
        <Card.Body>
            <Card.Text>Currently {current["temp_f"]}&#176;F and {current.condition.text}</Card.Text>
            <Card.Text>Feels like {current['feelslike_f']}&#176;F</Card.Text>
            <Card.Text>Wind {current['wind_dir']} at {current['wind_mph']} mph</Card.Text>
            <Card.Text>Last updated: {current['last_updated']}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default WeatherCard;

const styles = {
    heading: {
        textAlign: 'center'
    }
}