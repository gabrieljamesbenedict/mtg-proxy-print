import styles from "./CardDisplay.module.css"

const CardDisplay = () => {
    return (
        <>
            <div className={styles["root-container"]}>
                <div className={styles["cardbox-grid"]}>
                    <div className={styles["cardbox-grid__card-item"]}>
                        <h1>Hello World</h1>
                    </div>
                    <div className={styles["cardbox-grid__card-item"]}>
                        <h1>Hello World</h1>
                    </div>
                    <div className={styles["cardbox-grid__card-item"]}>
                        <h1>Hello World</h1>
                    </div>
                    <div className={styles["cardbox-grid__card-item"]}>
                        <h1>Hello World</h1>
                    </div>
                    <div className={styles["cardbox-grid__card-item"]}>
                        <h1>Hello World</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardDisplay;