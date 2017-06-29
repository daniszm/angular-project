import { SpaceShip } from './space-ship';

export class FighterShip extends SpaceShip {
    constructor() {
        super("Fighter", "/assets/ufo.png", 80, true, "/assets/shield.png", "/assets/weapon.png");
    }
}