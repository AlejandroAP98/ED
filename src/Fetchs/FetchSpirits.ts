import { Spirit } from "../../types/Spirits";

const FetchSpirits = async (): Promise<Spirit[]> => {
    const response = await fetch("https://eldenring.fanapis.com/api/spirits?limit=100");
    if (!response.ok) {
        throw new Error("Failed to fetch spirits");
    }
    const data = await response.json();
    return data.data;
};

export default FetchSpirits;