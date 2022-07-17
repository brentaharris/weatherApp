
import { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import baseUrl from './baseUrl';
import apiKey from './apiKey';
import axios from 'axios';


const DisplayWeather = () => {
    const requestUrl = `${baseUrl}/current.json?key=${apiKey}&q=29681`;
    const [data, setData] = useState(null);
    
    useEffect(() => {
        axios.get(requestUrl)
        .then(response => {
            setData(response.data)
        })

    },[requestUrl])

    if(data){
        const location = `${data.location.name}, ${data.location.region}`
        const currTemp = data.current["temp_f"];
        const currDescriptionText = data.current.condition.text;
        const feelsLike = data.current['feelslike_f'];
        const windDir = data.current['wind_dir'];
        const windSpeed = data.current["wind_mph"];
        const lastUpdated = data.current['last_updated'];

        return (
            <div style={styles.container}>
                <Row>
                    <Col xs='12'>
                        <h1 style={styles.heading}>Today's weather</h1>
                    </Col>
                    
                </Row>
                
                <h3>{location}</h3>
                <p>It is currently: {currDescriptionText} and {currTemp}F</p>
                <p>It feels like: {feelsLike}</p>
                <p>Wind: blowing currently, {windDir} at  {windSpeed} mph </p>
                <p>Last updated: {lastUpdated}</p>
            </div>
        )
    }
    return(
        <div>Not data</div>
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