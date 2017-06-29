import { SpaceShip } from './space-ship';

export class LightShip extends SpaceShip {
    constructor() {
        super("Light", "/assets/light.png", 50, true, "/assets/shield.png", "/assets/weapon.png");
    }
}