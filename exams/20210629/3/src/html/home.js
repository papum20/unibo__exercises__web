
const _CARS = {
	"car": {
		"id": 1,
		"last": false,
		"name": "Fiat X",
		"price": 37.5,
		"photo": "img/500x_1.jpg",
		"optionals": {
			"Allestimento": {
			"type": "radio",
			"items": {
				"young": {
					"price": 0
				},
				"business": {
					"price": 28.53,
					"note": "cerchi in lega, etc."
				},
				"cross-country": {
					"price": 35.88,
					"note": "fendinebbia, etc."
				}
			}
			},
			"Navigatore": {
				"type": "radio",
				"items": {
						"nessuno": {
						"price": 0
					},
						"Garmin mappe Italia": {
						"price": 18.47
					},
						"TomTom mappe Europa": {
						"price": 23.63
					}
				}
			},
			"Altro": {
				"type": "checkbox",
				"items": {
					"Catene da neve": {
						"price": 9.50,
						"note": "obbligatorie in inverno"
					},
					"Portasci": 12.75,
					"Portabici": 22.50
				}
			},
			"Seggiolini per bambini": {
				"type": "select",
				"max": 3,
				"price": 26.5,
				"label": "26.50 a seggiolino"
			}
		}
	}
};



const unpackJSON = function(el) {
	return (typeof(el) == 'object') ?
		Object.entries(el).map( ([key, val]) =>
			`<li>${key}:</li>
				<ul>${unpackJSON(val)}</ul>`
			)
			.join('\n')
		: el
}


const fetchCar = function() {
	const n = document.getElementById('form-id').value;
	console.log(`n = ${n}`);

	var car;
	const response = fetch(`http:///cgi-bin/getRentable.php?id=${n}`, {method:"GET"})
		.then( data => {
			console.log(`res: ${data}`);
			car = data.json();
			return data.json();
		})
		.catch( err => {
			console.log("Error: ", err);

			try {
				console.log(`find: ${Object.entries(_CARS).find( ([key,val]) => val.id == n )[0]}`);
				car = Object.entries(_CARS).find( ([key,val]) => val.id == n )[0];
			} catch(err2) {
				console.log("Erro2: ", err2);
				car = {error:"not found"};
			}
		});

	console.log(`diocane: ${car}`);
	return car;
}

const selectCar = async function(e) {
	const car = await fetchCar();
	console.log(`car: ${car}`);

	const carShow = document.getElementById('car-show');
	carShow.innerHTML = unpackJSON(car);
}




document.getElementById('form-submitter').addEventListener("click", selectCar);