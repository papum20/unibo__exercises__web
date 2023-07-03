import { useEffect, useState } from "react";
import { getOne } from "../api_weather";
import { Card, ListGroup } from 'react-bootstrap';



/**
 * 
 * @param {Object} data 
 * @returns 
 */
const weatherMap = (data) => 
	(
		<ListGroup>
			{
			Object.entries(data['main']).map( ([key, val]) => (
					<ListGroup.Item key={key}>{key}: {val}</ListGroup.Item>
			))}
		</ListGroup>
	)


/**
 * 
 * @param {string} city 
 * @returns 
 */
export const Weather = function( {city} ) {

	const [ weatherData, setWeatherData ] = useState(null);

	useEffect( () => {
		getOne(city)
			.then( data => {console.log('return: ', data);setWeatherData(data)} );
	}, [city]);

	return (
		<Card>
			<Card.Body>
				<Card.Title>
					{city}
				</Card.Title>
				<Card.Text>
					{weatherData &&
						weatherMap(weatherData)}
				</Card.Text>
			</Card.Body>
		</Card>
	);

}