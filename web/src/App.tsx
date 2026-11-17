import { useState, useEffect } from "react";

import Header from "./Header/Header";
import CardDisplay from "./CardDisplay/CardDisplay";

import styles from "./App.module.css"
import { parseCardList, testMethod } from "./service/parser";

import testDeckTxt from "./service/test_deck.txt?raw";

const App = () => {

    const [cardList, setCardList] = useState([])

    const [testDeck, setTestDeck] = useState<any>([])

    useEffect(() => {
        const parsedCardList = parseCardList(testDeckTxt);
        setTestDeck(parsedCardList)
    }, [])

    return (
        <>
            <div className={styles["root-container"]}>
                <Header/>
                {
                    testDeck.map(
                        (card: any, index: any) => (
                            <div key={index}>
                                <p>Name: {card.name}</p>
                                <p>Set: {(card.set)? card.set : ""}</p>
                                <p>Number: {(card.collector_number)? card.collector_number : ""}</p>
                            </div>
                        )
                    )
                }
                <CardDisplay/>
            </div>
        </>
    );
}
 
export default App;