const apiKey	= "d18155931fd4c5f376ce0ab064b92830"



function getWeather(selectedCity) {
	const url 		= `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&lang=it&units=metric&appid=${apiKey}`;
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

export default getWeather;