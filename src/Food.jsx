
function Food() {

    const food = "Pizza";
    const food2 = "Burger";

    return(
        <ul>
            <li>Lavash</li>
            <li>{food}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food;