import { SpaceShip } from './space-ship';

export class BomberShip extends SpaceShip {
    constructor() {
        super("Bomber", "/assets/spaceship.png", 30, false, "/assets/shield.png", "/assets/weapon.png");
    }
}