import React, {useState} from "react";

function MyComponent() {

    const [foods, setFoods] = useState(["Pizza",
                                        "Burger",
                                        "Pasta"]);

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;
        if (newFood.trim() !== "") { 
            const capitalizedFood = newFood.charAt(0).toUpperCase() + newFood.slice(1);
            setFoods(f => [...f, capitalizedFood]);
            document.getElementById("foodInput").value = "";
        }
    }         

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }

    return(<>
            <div>
                <h2>List Of Food</h2>
                <ul>
                    {foods.map((food, index) => (
                        <li key={index} onClick={() => handleRemoveFood(index)}>
                            {food}
                        </li>
                    ))}
                </ul>

                <input type="text" id="foodInput" placeholder="Add new food" />
                <button onClick={handleAddFood}>Add Food</button>
            </div>
        </>
    )
}
export default MyComponent;