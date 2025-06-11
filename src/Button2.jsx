// I used inline css to style the button

import Button from "./Button1";

function Button2(){

    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        marginRight: "5px",
        marginLeft: "5px",
        marginBottom: "5px",
        marginTop: "5px",
    }

    return(
        <button style={styles}>Click Me (2)</button>
    );
}

export default Button2;