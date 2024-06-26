import { ArrowLink } from "@shared/index";
import { Cta } from "./cta";
import { Img } from "./img";

export interface NavbarRegular {
    logo: Img,
    links: ArrowLink[],
    cta: Cta
}
