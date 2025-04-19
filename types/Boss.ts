export interface Boss {
    id: string;
    name: string;
    image?: string;
    description?: string;
    location: string;
    drops?: string[];
    healthPoints: string;
}
