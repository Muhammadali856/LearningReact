import React, { useState } from 'react';

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("spongeBob");
    }

    const updateAge = () => {
        setAge(age + 1);
    }

    const toggleEmployment = () => {
        setIsEmployed(!isEmployed);
    }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={updateAge}>Set Age</button>
            <p>isEmployed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployment}>Toggle Employement</button>
            
        </div>
    );
}

export default MyComponent