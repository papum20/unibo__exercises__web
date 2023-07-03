
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

const apiKey = "57155fe55e11b583378e9082e1b6f9db";
var isLoading = true;

function Weather(props){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&lang=it&units=metric&appid=${apiKey}`;
    const [weatherData,setWeatherData] = useState({
        name: "",
        temp: "",
        description: ""
    }); 

    useEffect( () => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            isLoading = false;
            setWeatherData(prevData => {
                return({
                    name: data.name,
                    temp: data.main.temp,
                    description: data.weather[0].description
                })
            });
        })
    },[]);

    if(!isLoading){
        return (
            <Card style={{ width: '18rem'}}>
            <Card.Body>
                <Card.Title>{weatherData.name}</Card.Title>
                    <Card.Text> Temperatura: {weatherData.temp} </Card.Text>
                    <Card.Text> Descrizione: {weatherData.description} </Card.Text>
            </Card.Body>
            </Card>
        );
    }
   
}


export default Weather;