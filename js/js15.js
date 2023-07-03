// 1

const people = [
	{name:'pippo',	age:11},
	{name:'caio',	age:22},
	{name:'pluto',	age:33}
];

// 2

function avgAge(people) {
	let sum = 0;
	for(let i = 0; i < people.length; i++)
		sum += people[i].age;
	sum /= people.length;
	return sum;
}

console.log(avgAge(people));

// 3

  //getKey(data) finds the keys of each object and 
  //returns only the first one if it is resolved with resolve(keys[0])
function getKey(data) {
	return new Promise((resolve, reject) => {
    	const keys = Object.keys(data);
		if (keys.length > 0) {
			resolve(keys[0]);
		} else {
			reject("The object has no keys.");
		}
	});
}

//write a for loop that iterates inside the people array 
//and call getKey() on each person
for(let i = 0; i < people.length; i++) {
	getKey(people[i])
		.then(key => console.log(`The first key of the object is "${key}".`))
		.catch(error => console.error(error));
}


// 4

const people2 = [
	{name:'pippo',	age:11, birth:new Date(11,144,12,1)},
	{name:'caio',	age:22, birth:new Date(2021,10,13,40,42,1)},
	{name:'pluto',	age:33}
];

for(let i = 0; i < people2.length; i++) {
	var tmp;
	getKey(people2[i])
		.then(function (key) {
			tmp = key;
			return key;
		})
		.then(a => console.log(`The first key of the object is "${a}".`))
		.catch(error => console.error(error));
	console.log(tmp);
}