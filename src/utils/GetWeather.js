import baseUrl from "../baseUrl";
import apiKey from "../apiKey";

const GetWeather = async () => {
    const requestUrl = `${baseUrl}/current.json?key=${apiKey}&q=29681`;
        
    try {
        const response = await fetch(requestUrl);
        if (!response.ok) {
            throw new Error(`http error: ${response.status}`)
        }
        const data = await response.json();
        
        const finalData = {
            currTemp: data.current["temp_f"],
            currDescriptionText: data.current.condition.text,
            feelsLike: data.current['feelslike_f'],
            windDir: data.current['wind_dir'],
            windSpeed: data.current["wind_mph"],
            lastUpdated: data.current['last_updated']
        }
        return finalData;

    } catch (error) {
        console.log(`http error: ${error}`)
    }
}

export default GetWeather
