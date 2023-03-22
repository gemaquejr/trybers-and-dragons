import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static numinstacia = 0;
  
  constructor(name: string) {
    super(name);  
    this._energyType = 'stamina';
    Ranger.numinstacia += 1;
  }
   
  public get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger.numinstacia;
  }  
}
  
export default Ranger;