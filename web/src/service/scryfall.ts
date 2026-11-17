import axios from "axios"

const SCRYFALL_ENDPOINT = "https://api.scryfall.com"

const SCRYFALL_API = axios.create({
    baseURL: SCRYFALL_ENDPOINT
});

export interface ParsedIndentifier {
    name: string;
    set?: string;
    collector_number?: string;
}

export const getCardByName = async (cardName: string) => {
    const response = await SCRYFALL_API.get(
        "cards/named",
        {
            params: {
                exact: cardName
            }
        }
    );
    return response.data
}

export const getCardCollection = async (cardIdentifierList: ParsedIndentifier[]) => {
    const response = await SCRYFALL_API.post(
        "cards/collection",
        {
            identifiers: cardIdentifierList
        }
    );
    return response.data.data
}