import { osses, glosses } from "../data";

export interface IDisplayed {
    name: string;
    type: string;
}
export const getRandomOssOrGloss = () => {
    const ossAndGloss = [
        ...osses.map((name) => {
            return { name: name.toUpperCase(), type: "Horse" };
        }),
        ...glosses.map((name) => {
            return { name: name, type: "Gloss" };
        }),
    ];

    return ossAndGloss[Math.floor(Math.random() * ossAndGloss.length)];
};
