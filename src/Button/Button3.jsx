// I used CSS Modules to style the button

import styles from "./Button.module.css";

function Button3(){
    return(
        <button className={styles.button}>Click me (3)</button>
    );
}

export default Button3;