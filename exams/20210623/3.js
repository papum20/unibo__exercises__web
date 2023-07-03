

const EVENT_FIELDS = [
	'id',
	'name',
	'img',
	'place',
	'date',
	'time',
];

const _EVENTS = [
	{
		'id'	: 1,
		'name'	: 'event1',
		'img'	: 'img1',
		'place'	: 'place1',
		'date'	: 'date1',
		'time'	: 'time1',
	},
	{
		'id'	: 2,
		'name'	: 'event2',
		'img'	: 'img2',
		'place'	: 'place2',
		'date'	: 'date2',
		'time'	: 'time2',
	},
	{
		'id'	: 3,
		'name'	: 'event3',
		'img'	: 'img3',
		'place'	: 'place3',
		'date'	: 'date3',
		'time'	: 'time3',
	},
];

const _GET_EVENTS = async () => {
	return _EVENTS;
}


/**
 * @param {Object} event 
 */
const EVENT = (event) => `
	<div class="card">
		<div class="card-body">
			<h5 class="card-title>${event.id}</h5>
			<ul class="list-group">
				${
					'\n'.join(
						Object.entries(event).filter( (key, val) => key != 'id')
						.map( (key, val) => `<li class=list-group-item>${val}</li>`)
					)
				}
		</div>
	</div>
`

export const init = async function() {
	try {
		const event_container = document.getElementById('events');
		// events = await fetch('/LoadEvents');
		events = await _GET_EVENTS();
		
		events.array.forEach(element => 
			event_container.innerHTML += EVENT(element)
		);
	} catch(e) {
		alert(`Error: ${e}`);
	}
}