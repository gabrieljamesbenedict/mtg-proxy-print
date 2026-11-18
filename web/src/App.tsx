import { useState, useEffect } from "react";

import Header from "./Header/Header";
import CardDisplay from "./CardDisplay/CardDisplay";

import styles from "./App.module.css"
import { getCardCollection, type ParsedIndentifier, type ScryfallCard } from "./service/scryfall";

import testDeckTxt from "./service/test_deck.txt?raw"
import { parseCardList } from "./service/parser";
import ControlBar from "./ControlBar/ControlBar";

const App = () => {

    const [cardList, setCardList] = useState<ScryfallCard[]>([])

    useEffect(() => {
        const parsedIdentifierList = parseCardList(testDeckTxt);
        getCardCollection(parsedIdentifierList).then((scryfallCardList) => {
            setCardList(scryfallCardList);
        })
    }, [])

    return (
        <>
            <div className={styles["root-container"]}>
                <Header/>
                <div className={styles["body-container"]}>
                    <ControlBar/>
                    <CardDisplay cardDisplayList={cardList} />
                </div>
            </div>
        </>
    );
}
 
export default App;