import { Img } from "./img";

export interface Review {
    img: Img;
    name: string;
    review: string;
    active: boolean;
}
