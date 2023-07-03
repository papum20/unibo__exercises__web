import { useState } from "react";
import { Form } from 'react-bootstrap';
import { WORK_FIELDS } from "./components/Work";



const SELECTED_OPTIONS = ['work', 'vynil'];


function App() {

	const [ selectedType, setSelectedType ] = useState(SELECTED_OPTIONS[0]);
	const [ workFilter, setWorkFilter ] = useState({});


	return (
		<div>
			<Form>
				<Form.Group onChange={ e => setSelectedType(e.target.value) }>
					{
						SELECTED_OPTIONS.map( (opt) => (
							<Form.Check
								label={opt}
								name='group1'
								type="radio"
								value={opt}
							/>
						))
					}
				</Form.Group>

				{
					WORK_FIELDS.map( field => (
						<Form.Group controlId={`input-${field}`}>
							<Form.Label>
								{field}
							</Form.Label>
							<Form.Control id={`control-${field}`} as="input" onChange={ e => {
								setWorkFilter( Object.assign(workFilter, Object.fromEntries([[field, e.target.value]])) );
								console.log(workFilter);
							}}>
								
							</Form.Control>
						</Form.Group>
					))
				}
			</Form>

			<p>Selected type: {selectedType}</p>
			<p>Selected filters: {JSON.stringify(workFilter)}</p>


		</div>
	);
}

export default App;
