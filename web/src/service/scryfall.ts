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

export const getCardCollection = async (cardIdentifierList: ParsedIndentifier[]) => {
    const response = await SCRYFALL_API.post(
        "cards/collection",
        {
            identifiers: cardIdentifierList
        }
    );
    return response.data.data
}