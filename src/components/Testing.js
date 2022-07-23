import { useSelector } from "react-redux";

const Testing = () => {
  const city = useSelector((state) => state.weather.city);
  const state = useSelector((state) => state.weather.state);

  return (
    <div>
      <p>The current temperature is {city}, {state}F</p>
    </div>
  );
};

export default Testing;
