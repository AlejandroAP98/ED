export type Armor = {
    id: number;
    name: string;
    image: string;
    description: string;
    category: string;
    weight: number;
    dmgNegation: {
        name: string;
        amount: number;
    };
    resistance: {
        name: string;
        amount: number;
    };
}