const APPID = "";


/**
 * 
 * @param {float} lat 
 * @param {float} lon 
 * @returns 
 */
const URL_WEATHER = (lat, lon) => 
	`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APPID}`
/**
 * 
 * @param {string} city 
 * @returns {string}
 */
const URL_COORDINATES = (city) => 
	`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APPID}`


/**
 * 
 * @param {string} city 
 */
export const getCoordinates = async function(city) {

	try {
		const response = await fetch(URL_COORDINATES(city));
		const json = response.json();
		console.log('json1: ' , json);
		return json;
	} catch(err) {
		console.log(`Error: ${err}`);
	}
	
}


/**
 * 
 * @param {string} city 
 */
export const getOne = async function( city ) {

	try {
		const coordinates = (await getCoordinates(city))[0];
		const [lat, lon] = [coordinates['lat'], coordinates['lon']];
		console.log('lat: ', lat, lon);

		const response = await fetch(URL_WEATHER( lat, lon ));
		const json = response.json();
		console.log('json2: ' , json);
		return json;
	} catch(err) {
		console.log(`Error: ${err}`);
	}
	
}
