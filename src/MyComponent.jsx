import React, {useState, useEffect, use} from "react";

function MyComponent() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event listener added");

        return () => {
            window.removeEventListener("resize", handleResize)
            console.log("Event listener removed");
        }

    }, []);

    useEffect(() => {
        document.title = `Width: ${width}px, Height: ${height}px`;
    }, [width, height]);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    
    return(
        <div>
            <h1>Window Size</h1>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
        </div>
    );

}
export default MyComponent;