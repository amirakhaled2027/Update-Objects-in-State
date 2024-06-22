import { useState } from "react"


function MyComponent() {
    const [car, setCar] =useState({
                                        year: 2021,
                                        make: "BMW",
                                        name: "BMW M4"
                                    });

    function modelYear(event) {
        setCar(c => ({...c, year: event.target.value}));
    }

    function modelMake(event) {
        setCar(c => ({...c, make: event.target.value}));
    } 

    function modelName(event) {
        setCar(c => ({...c, name: event.target.value}));
    }

    return(<div>
                <p>Your favorite car is: {car.name} {car.year} {car.make}</p>

                <input type="text" value={car.name} onChange={modelName}/> <br/>
                <input type="number" value={car.year} onChange={modelYear}/> <br/>
                <input type="text" value={car.make} onChange={modelMake}/> <br/>
            </div>)
}

export default MyComponent