import { Weather } from "./components/Weather";
import { useState } from "react";
import { Form } from 'react-bootstrap';



function App() {

	const [ city, setCity ] = useState('London');
	
  	return (
		<div>
			<Weather city={city}></Weather>
			<Form>
				<Form.Control id='city-form' as='textarea' onChange={e => setCity(e.target.value)}>
					
				</Form.Control>
			</Form>
			<p>{city}</p>
		</div>
	);
}

export default App;
