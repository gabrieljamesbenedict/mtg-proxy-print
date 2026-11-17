import { useState, useEffect } from "react";

import Header from "./Header/Header";
import CardDisplay from "./CardDisplay/CardDisplay";

import styles from "./App.module.css"
import type { ScryfallCard } from "./service/scryfall";

import testDeckTxt from "./service/test_deck.txt?raw"
import { parseCardList } from "./service/parser";

const App = () => {

    const [cardList, setCardList] = useState<ScryfallCard[]>([])

    useEffect(() => {
        setCardList(parseCardList(testDeckTxt))
    }, [])

    return (
        <>
            <div className={styles["root-container"]}>
                <Header/>
                <CardDisplay cardDisplayList={cardList} />
            </div>
        </>
    );
}
 
export default App;