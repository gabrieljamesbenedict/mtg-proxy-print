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

export interface ScryfallCard {
    id: string;
    name: string;
    cmc: number;
    type_line: string;
    rarity: string;
    color_identity: string[];
    colors: string[];
    artist?: string;

    mana_cost?: string;
    oracle_text?: string;
    flavor_text?: string;
    
    power?: string;
    toughness?: string;
    loyalty?: string;

    image_uris?: {
        thumb: string;
        grid: string;
        display: string;
        png: string;
    };

    card_faces?: {
        name: string;
        mana_cost: string;
        type_line: string;
        oracle_text?: string;
        flavor_text?: string;
        power?: string;
        toughness?: string;
        loyalty?: string;
        artist?: string;
        image_uris?: {
            thumb: string;
            grid: string;
            display: string;
            png: string;
        };
    }[];
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

export const getCardCollection = async (identifierList: ParsedIndentifier[]) => {
    const chunks: ParsedIndentifier[][] = [];
    for (let i = 0; i < identifierList.length; i += 75) {
        chunks.push(identifierList.slice(i, i + 75));
    }
    const totalResponse = []
    for (const chunk of chunks) {
        const response = await SCRYFALL_API.post(
            "cards/collection",
            {
                identifiers: chunk
            }
        );
        totalResponse.push(...response.data.data);
        await new Promise((resolve) => setTimeout(resolve, 500)); // IMPORTANT!!! Scryfall has an API rate limit of 500ms between each request
    }
    return totalResponse;
}