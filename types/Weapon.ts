export interface Weapon {
    name: string;
    description: string;
    category?: string;
    weight?: number;
    attack?: { name: string; amount: number }[];
    defence?: { name: string; amount: number }[];
    requiredAttributes?: { name: string; amount: number }[];
    scalesWith?: { name: string; scaling: string }[];
    id: string;
    image?: string;
}