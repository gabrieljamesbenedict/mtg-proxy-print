import Header from "./Header/Header";
import CardDisplay from "./CardDisplay/CardDisplay";

import styles from "./App.module.css"

const App = () => {
    return (
        <>
            <div className={styles["root-container"]}>
                <Header/>
                <CardDisplay/>
            </div>
        </>
    );
}
 
export default App;