import { Card } from 'react-bootstrap';

export const _WORKS = [
	{
		id: 1,
		title: 'song1',
		author: 'author1',
		genre: 'pop',
		year: 2000,
		publisher: 'some',
		country: 'IT',
		images: ['../logo.svg', '../logo.svg'],
		copies: 2
	}
];

export const WORK_FIELDS = ['title', 'author', 'year', 'publisher'];


const fetchWork = async function(title, author, year, publisher) {

	try {
		const works = await fetch(`/works?title=${title}&autor=${author}&year=${year}&publisher=${publisher}`);
		const json = works.json();
		return json;
	} catch(err) {
		console.log('error fetch: ', err);
		return _WORKS;
	}
}


export const Work = () => {


	
	return (
		<Card>
			<Card.Body>
				<Card.Text>

				</Card.Text>
			</Card.Body>
		</Card>
	)
}