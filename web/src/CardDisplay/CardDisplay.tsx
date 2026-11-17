import styles from "./CardDisplay.module.css"

const CardDisplay = () => {
    return (
        <>
            <div className={styles["root-container"]}>
                <div className={styles["cardbox-grid"]}>
                    {Array.from({ length: 10 }).map((_, index) => (
                    <div key={index} className={styles["cardbox-grid__card-item"]}>
                        
                    </div>
                    ))}
                    <div className={`${styles["cardbox-grid__card-item"]} ${styles["cardbox-grid__card-item--input"]}`}>

                    </div>
                </div>
            </div>
        </>
    );
}

export default CardDisplay;