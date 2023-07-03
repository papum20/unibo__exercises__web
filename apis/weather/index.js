const apiKey		= "d18155931fd4c5f376ce0ab064b92830"
const citySelect	= document.getElementById("city-select");
const citySelect1	= document.getElementById("all-cities-sync");
const citySelect2	= document.getElementById("all-cities");
const weatherCards	= document.getElementById("weather-cards");	//div to fill with weather cards
const form 			= document.getElementById("city-form");		//form to get the city
const container 	= document.getElementById("div-gradient");
//for the home exercise using Promise.all
const cities = ["Milano", "Roma", "Bologna", "Palermo", "Napoli", "Torino", "Firenze"];




function clearWeatherCards() {
	weatherCards.innerHTML = '';
	//removes the weather cards from the div
}

function getWeather(selectedCity, apiKey) {
	clearWeatherCards()
	var info;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&lang=it&units=metric&appid=${apiKey}`;
	const fetcher = fetch(url)
		.then(res => {
			if(!res.ok) throw new Error(res.statusText);
			return res.json();
		})
		.catch(err => {
			console.log("getting url: " + err);
		});
	return fetcher;
}

//oppure: 
// async function getWeather(selectedCity, apiKey) {
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&lang=it&units=metric&appid=${apiKey}`;
//   riempi se vuoi usare invece async await
//}


/*
 *	RECURSIVELY UNPACKS ARRAY AND OBJECTS, TO RETURN A SINGLE STRING
 */

function arrayOrObj2str(container) {
	return typeof container == "object" ? Object.values(container).map((field) => arrayOrObj2str(field)).join(', ')
		: typeof container == "array" ? container.map((field) => arrayOrObj2str(container)).join(', ')
		: container;
}


/*
 *	GETS WEATHER DATA, CREATES A CARD AND ADDS IT TO THE div
 */

function drawWeatherCard(data) {
	console.log(data);
	
	// map to <key, val>
	var stats = Object.entries(data);
	console.log(stats);
	// map structs
	stats = stats.map( (field) => (
		[field[0], arrayOrObj2str(field[1])]
	));
	console.log(stats);
	// map to html
	stats = stats.map( (field) => `
		<div class="d-flex flex-row justify-content-md-between">
			<div>${field[0]}:</div>
			<div>${field[1]}</div>
		</div>
	` );
	//console.log(stats);
	
	const card = `
		<div class="card">
			<div class="card-body">
				${stats.join("\n")}
			</div>
		</div>
	`;
	//console.log(card);

	weatherCards.innerHTML += card;
}

function weatherErrorHandler(err) {
	console.log("creating html: " + err);
	weatherCards.innerHTML = '<p>An error occurred.</p>';
}


/*
 *	EVENT LISTENERS
 */

form.addEventListener("submit", event => {
	event.preventDefault();		// prevents form from refreshing page
	const selectedCity = document.getElementById("city-select").value;

	getWeather(selectedCity, apiKey)
		.then(data => drawWeatherCard(data))
		.catch(err => weatherErrorHandler(err))
});


citySelect1.addEventListener("click", event => {
	event.preventDefault();		// prevents form from refreshing page
	clearWeatherCards();
	
	Promise.all(
		cities.map((city) => 
			getWeather(city, apiKey)
				.then(data => drawWeatherCard(data))
				.catch(err => weatherErrorHandler(err))
		)
	);
})


citySelect2.addEventListener("click", event => {
	event.preventDefault();		// prevents form from refreshing page
	clearWeatherCards();
	
	cities.forEach(city =>
		{
			getWeather(city, apiKey)
				.then(data => drawWeatherCard(data))
				.catch(err => weatherErrorHandler(err))
		}
	);
})