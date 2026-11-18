import styles from "./ControlBar.module.css"

const ControlBar = () => {
    return (
        <>
            <div className={styles["root-container"]}>
                <div className={styles["control-bar-contatiner"]}>
                    <h1>Control Board</h1>
                    <p>Card Input</p>
                    <p>Card List</p>
                    <p>Idk other features</p>
                </div>
            </div>
        </>
    );
}
 
export default ControlBar;