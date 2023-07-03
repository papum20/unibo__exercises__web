import { useEffect, useState } from 'react';
import getWeather from './connect';
import WeatherCard from './WeatherCard';
import CitySelector from './CitySelector';
import { Col, Container, Form, Row } from 'react-bootstrap';
import styles from "./styles/App.module.css";

/*
 *	CONSTANTS
 */

 const cities = ["Milano", "Roma", "Bologna", "Palermo", "Napoli", "Torino", "Firenze"];
 
 


function App() {

	const [city, setCity] = useState(cities[0]);
	const [weatherData,setWeatherData] = useState({});
	
	
	useEffect(() => {
		async function fetchWeather() {
			getWeather(city)
				.then(data => {
					setWeatherData(data);
					//console.log(data);
				})
				.catch(err => console.error(err));
		};
		fetchWeather();
	}, [city]);
	
	
	
	return (
		<div className='bg-primary text-primary'>
			<Container>
				<h1 className={`${styles.title} text-primary`}>IWWA</h1>
				<h2 className={`${styles.title} text-primary`}>Italian Worst Weather App</h2>
			</Container>
			<Row>
				<Col md={3}>
					<h3 className={styles.title}>Display one city</h3>
					<Form>
						<CitySelector
							onSubmitClicked={(selectedCity) => {
								setCity(selectedCity);
								setWeatherData(city);
							}}
						>

						</CitySelector>
					</Form>
				</Col>
			</Row>
			<Container>
				<WeatherCard
					className="bg-primary"
					data={weatherData}
				/>
			</Container>
		</div>
	);
}

export default App;
