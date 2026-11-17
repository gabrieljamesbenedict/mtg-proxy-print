import type { ScryfallCardIdentifier } from "./scryfall";

export const parseCardList = (cardList: string): ScryfallCardIdentifier[] => {
    const cardListArray = cardList.split("\n");
    const cardIdentiferList: ScryfallCardIdentifier[] = [];
    for (const card of cardListArray) {

        let amount: number;
        let cardName: string;
        let cardSet: string;
        let cardCollectorNumber: string;

        const cardInfo = card.split(" ");
        const cardInfoSize = cardInfo.length;

        let containsUselessData = false
        if (
            cardInfo[cardInfoSize] == "*F*"
            || cardInfo[cardInfoSize] == "*E*"
            || cardInfo[cardInfoSize] == "*S*"
            || cardInfo[cardInfoSize] == "*GF*"
            || cardInfo[cardInfoSize] == "*SE*"
            || cardInfo[cardInfoSize] == "*CM*"
            || cardInfo[cardInfoSize] == "*E*"
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

        cardName = "";
        const nameStart = containsAmount ? 1 : 0;
        const nameEnd = containsUselessData ? cardInfoSize-3 : cardInfoSize-4;
        for (const cardNamePart in cardInfo.slice(nameStart, nameEnd)) {
            cardName += cardNamePart;
        }

        cardSet =               containsUselessData ? cardInfo[cardInfoSize-3] : cardInfo[cardInfoSize-2];
        cardCollectorNumber =   containsUselessData ? cardInfo[cardInfoSize-2] : cardInfo[cardInfoSize-1];

        const cardIdentifier: ScryfallCardIdentifier = {
            name: cardName,
            set: cardSet,
            collector_number: cardCollectorNumber
        }

        cardIdentiferList.push(cardIdentifier)
    }
    return cardIdentiferList
}