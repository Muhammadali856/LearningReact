import React, {useState, useEffect} from "react";

function MyComponent() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("red");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color] );

    function addCount() {
        setCount(c => c + 1);
    }

    function decreaseCount() {
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    return(
        <div>
             <span style={{color: color}}> Count: {count}</span> <br />
            <button onClick={decreaseCount}>Decrement</button>
            <button onClick={addCount}>Increment</button><br />
            <button onClick={changeColor}>Change Color</button>
        </div>
    );

}
export default MyComponent;