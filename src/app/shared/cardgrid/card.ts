import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

export class Card {
    constructor(public icon: IconDefinition, public name: String, public link: String, public description: String) { };
}