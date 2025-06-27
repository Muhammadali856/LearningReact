import React, {useState} from 'react';

function MyComponent(){
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carModel, setCarModel] = useState('');
    const [carMake, setCarMake] = useState('');

    function handleAddCar(){
        const newCar = {
            make: carMake,
            model: carModel,
            year: carYear
        }
        setCars([...cars, newCar]);
        setCarMake('');
        setCarModel('');
        setCarYear(new Date().getFullYear());
    }

    function handleRemoveCar(index){
        setCars(cars.filter((_, i) => i !== index));
    }

    function handleMakeChange(event){
        setCarMake(event.target.value);
    }

    function handleModelChange(event){
        setCarModel(event.target.value);
    }

    function handleYearChange(event){
        setCarYear(event.target.value);
    }

    return (
        <div className='my-component'>
            <h1>List of Car Objects</h1>
            <ul>
                {cars.map((car, index) => (
                    <li key={index}>
                        {car.year} {car.make} {car.model}
                        <button className='button1' onClick={() => handleRemoveCar(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange}/><br />
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder='Enter Car Make'/><br />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder='Enter Car Model'/><br />
            <button className="button2" onClick={handleAddCar}>Add Car</button>
        </div>
    )
}
export default MyComponent;