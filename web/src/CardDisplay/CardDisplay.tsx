import type { ScryfallCard } from "../service/scryfall";
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
                                const cardAlt = `${card.name} ${card.set} ${card.collector_number}`
                                const cardTitle = `${card.name} (${card.set.toUpperCase()}) ${card.collector_number}`
                                return (
                                    <div key={index} className={styles["cardbox-grid__card-item"]}>
                                        <img src={gridImageURI} alt={cardAlt} title={cardTitle}/>
                                    </div>
                                )
                            }
                        )
                    }
                    <div className={`${styles["cardbox-grid__card-item"]} ${styles["cardbox-grid__card-item--input"]}`}>
                        <p>Add a card</p>
                        <p>Or drag an image here</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardDisplay;