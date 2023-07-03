import { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';



const SELECTED_OPTIONS = ['work', 'vynil'];


function App() {

	const [ workAvailable, setWorkAvailable ] = useState(null);
	const [ selectedType, setSelectedType ] = useState(SELECTED_OPTIONS[0]);


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
			</Form>
			<p>{selectedType}</p>
		</div>
	);
}

export default App;
