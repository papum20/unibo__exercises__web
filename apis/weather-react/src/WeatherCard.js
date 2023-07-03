import { Card, Col, Container, Row } from "react-bootstrap";
import { arrayOrObj2str } from "./utils";
import styles from "./styles/WeatherCard.module.css";


const WeatherCard = ({data}) => {

	const stats = Object.entries(data).map( (field) => 
		[field[0], arrayOrObj2str(field[1])]
	);

	const card = 
			stats.map( (field) => (
				<Row
					key={field[0]}
					xs={2} md={2} xl={2}
					className={`${styles.weatherCard}`}
				>
					<Col>{`${field[0]}:`}</Col>
					<Col>{field[1]}</Col>
				</Row>
			));

	return (
		 <Card
			className={`${styles.flexCenter} ${styles.weatherCard}`}
		 >
			<Card.Title>
				Title
			</Card.Title>
			<Card.Body>
				<Container>
				{card}
				</Container>
			</Card.Body>
		</Card>
	);
}



export default WeatherCard;