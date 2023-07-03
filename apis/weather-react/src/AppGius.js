import React from 'react';
import Weather from './Weather';
import { useState, useEffect } from 'react';



function App() {
    const [city, setCity] = useState("Milano");
    const [show,setShow] = useState(false);
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
        setShow(true);
        
    }
    function changeCity(e){
        setCity(prevCity => e.target.value);
        setShow(false);
    }

  return (
    <div>
        
        
        <div className="container-fluid animated-gradient py-5">
            <h1 className="title text-center mb-5">IWWA</h1>
            <h2 className="title text-center mb-5">Italian Worst Weather App</h2>
            <div className="row">
            <div className="col-md-6 offset-md-3">
                <h3 className="title">Display one city</h3>
                <form id="city-form" onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <select name="citta" id={city} value={city} className="form-select" onChange={changeCity}>
                        <option value="Milano" id="Milano">Milano</option>
                        <option value="Roma" id="Roma">Roma</option>
                        <option value="Bologna" id="Bologna">Bologna</option>
                        <option value="Palermo" id="Palermo">Palermo</option>
                        <option value="Napoli" id="Napoli">Napoli</option>
                        <option value="Torino" id="Torino">Torino</option>
                        <option value="Firenze" id="Firenze">Firenze</option>
                    </select>
                </div>
                <button type="submit" id="display-button" className="btn btn-primary">Display</button>
                </form>
            </div>
            
            </div>
        <div className="row mt-5" id="metto_cards">
            
            {show && <Weather city ={city}/>} {/*conditional rendering*/ }
            
        </div>
        </div>
        
    </div>
  );
  
}

export default App;
