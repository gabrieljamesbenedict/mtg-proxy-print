import type { ScryfallCard } from "./scryfall";

export const parseCardList = (cardList: string): ScryfallCard[] => {
    const cardListArray = cardList.split("\n");
    const cardIdentiferList: ScryfallCard[] = [];
    for (const card of cardListArray) {

        let amount: number;
        let cardName: string;
        let cardSet: string;
        let cardCollectorNumber: string;

        const cardInfo = card.trim().split(" ");
        const cardInfoSize = cardInfo.length;

        let containsUselessData = false
        if (
            cardInfo[cardInfoSize-1] == "*F*"
            || cardInfo[cardInfoSize-1] == "*E*"
            || cardInfo[cardInfoSize-1] == "*S*"
            || cardInfo[cardInfoSize-1] == "*GF*"
            || cardInfo[cardInfoSize-1] == "*SE*"
            || cardInfo[cardInfoSize-1] == "*CM*"
            || cardInfo[cardInfoSize-1] == "*E*"
        ) {
            containsUselessData = true
        }

        let containsAmount = true;
        if (/^\d+x?$/.test(cardInfo[0])) {
            amount = parseInt(cardInfo[0]);
        } else {
            amount = 1;
            containsAmount = false;
        }

        const nameStart = containsAmount ? 1 : 0;
        const nameEnd = containsUselessData ? cardInfoSize-3 : cardInfoSize-2;
        cardName = cardInfo.slice(nameStart, nameEnd).join(" ")

        cardSet =               containsUselessData ? cardInfo[cardInfoSize-3] : cardInfo[cardInfoSize-2];
        cardCollectorNumber =   containsUselessData ? cardInfo[cardInfoSize-2] : cardInfo[cardInfoSize-1];

        const cardIdentifier: ScryfallCard = {
            name: cardName,
            set: cardSet.substring(1,cardSet.length-1).toLowerCase(),
            collector_number: cardCollectorNumber
        }

        cardIdentiferList.push(cardIdentifier)
    }
    return cardIdentiferList
}

export const testMethod = () => {
    alert("Hello World")
}