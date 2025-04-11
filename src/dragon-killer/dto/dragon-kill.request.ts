export type Weapon = 'sword' | 'axe' | 'spear';

export class DragonKillRequest {
    dragonId: number;
    killBy: Weapon 
}