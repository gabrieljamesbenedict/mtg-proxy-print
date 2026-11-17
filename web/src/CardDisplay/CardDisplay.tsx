import type { ParsedIndentifier } from "../service/scryfall";
import styles from "./CardDisplay.module.css"

interface CardDisplayProps {
    cardDisplayList: ParsedIndentifier[];
}

const CardDisplay = ({ cardDisplayList }: CardDisplayProps) => {
    return (
        <>
            <div className={styles["root-container"]}>
                <div className={styles["cardbox-grid"]}>
                    {
                        cardDisplayList.map(
                            (card, index) => (
                                <div key={index} className={styles["cardbox-grid__card-item"]}>
                                    <h3>{card.name}</h3>
                                    <p>{card.set ? card.set : ""}</p>
                                    <p>{card.collector_number ? card.collector_number : ""}</p>
                                </div>
                            )
                        )
                    }
                    <div className={`${styles["cardbox-grid__card-item"]} ${styles["cardbox-grid__card-item--input"]}`}>

                    </div>
                </div>
            </div>
        </>
    );
}

export default CardDisplay;