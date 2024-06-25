import { Cta } from "./cta";
import { Img } from "./img";
import { Link } from "./link";

export interface NavbarRegular {
    logo: Img,
    links: Link[],
    cta: Cta
}
