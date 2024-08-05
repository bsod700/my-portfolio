import { Cta } from "./cta";
import { Img } from "./img";

export interface Project {
    title: string;
    description: string;
    responsibilities: string[];
    cta: Cta;
    devCta?: Cta;
    previewImg: Img;
    iconImg: Img;
}
