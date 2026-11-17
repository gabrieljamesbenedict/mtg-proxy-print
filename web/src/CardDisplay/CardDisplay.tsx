import styles from "./CardDisplay.module.css"

const CardDisplay = () => {
    return (
        <>
            <div className={styles["root-container"]}>
                <div className={styles["cardbox-grid"]}>
                    {Array.from({ length: 15 }).map((_, index) => (
                    <div key={index} className={styles["cardbox-grid__card-item"]}>
                        <h1>Hello World</h1>
                    </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default CardDisplay;