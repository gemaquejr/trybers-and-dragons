import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _createdArchetypeInstances = 0;
  
  constructor(name: string) {
    super(name);  
    this._energyType = 'stamina';
    Ranger._createdArchetypeInstances += 1;
  }
   
  static createdArchetypeInstances(): number {
    return Ranger._createdArchetypeInstances;
  }
  
  public get energyType(): EnergyType {
    return this._energyType;
  }
}
  
export default Ranger;