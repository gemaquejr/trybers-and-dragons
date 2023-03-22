import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  static numinstacia = 0;
  
  constructor(name: string) {
    super(name);  
    this._energyType = 'stamina';
    Warrior.numinstacia += 1;
  }
  
  public get energyType(): EnergyType {
    return this._energyType;
  }
   
  static createdArchetypeInstances(): number {
    return Warrior.numinstacia;
  }
}
  
export default Warrior;