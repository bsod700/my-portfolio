import { ArrowLink, logoConfig } from "@shared/index";
import { Cta } from "./cta";

export interface NavbarRegular {
    logo: logoConfig,
    links: ArrowLink[],
    cta: Cta
}
