// import { Image } from '../image';

export abstract class SpaceShip {
  modelName: string;
//   image: Image = new Image("/assets/ufo.png", "Spaceship");
  imageUrl: string;
  health: number;
  activeShields: boolean;
  activeWeapons: boolean = false;
  shieldImageUrl: string;
  weaponImageUrl: string;

  constructor(modelName: string, imageUrl: string, health: number, activeShields: boolean, shieldImageUrl: string, weaponImageUrl: string) {
    this.modelName = modelName;
    this.imageUrl = imageUrl;
    this.health = health;
    this.activeShields = activeShields;
    this.shieldImageUrl = shieldImageUrl;
    this.weaponImageUrl = weaponImageUrl;
  }
}
