import { Button, Form } from "react-bootstrap";


const cities = ["Milano", "Roma", "Bologna", "Palermo", "Napoli", "Torino", "Firenze"];



const CitySelector = ({ onSubmitClicked }) => {

	const cityOptions = cities.map((city) => (
		<option value={city}>{city}</option>
	));
	
	return (
		<Form onSubmit={(val) => onSubmitClicked(val)} >
			<Form.Select id="select-city">
				{cityOptions}
			</Form.Select>
			<Button
				type="submit"
			>
				Sign Up
			</Button>
		</Form>
	//	<button type="submit" id="display-button" class="btn btn-primary">Display</button>

	);
}


export default CitySelector;