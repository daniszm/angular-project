import { Component, OnInit } from '@angular/core';
import { SpaceShip } from '../ships/space-ship';
import { FighterShip } from '../ships/fighter-ship';
import { BomberShip } from '../ships/bomber-ship';
import { LightShip } from '../ships/light-ship';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {
  spaceShips: SpaceShip[] = [];

  constructor() { }

  ngOnInit() {
    this.spaceShips.push(new FighterShip());
    this.spaceShips.push(new BomberShip());
    this.spaceShips.push(new LightShip());
  }

}
