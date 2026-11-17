import type { ParsedIndentifier, ScryfallCard } from "../service/scryfall";
import styles from "./CardDisplay.module.css"

interface CardDisplayProps {
    cardDisplayList: ScryfallCard[];
}

const CardDisplay = ({ cardDisplayList }: CardDisplayProps) => {
    return (
        <>
            <div className={styles["root-container"]}>
                <div className={styles["cardbox-grid"]}>
                    {
                        cardDisplayList.map(
                            (card, index) => {
                                const gridImageURI = card.image_uris?.grid;
                                return (
                                    <div key={index} className={styles["cardbox-grid__card-item"]}>
                                        <img src={gridImageURI} alt={`${card.name} ${card.set} ${card.collector_number}`} />
                                    </div>
                                )
                            }
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