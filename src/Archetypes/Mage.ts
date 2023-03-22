import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static numinstacia = 0;
  
  constructor(name: string) {
    super(name);  
    this._energyType = 'mana';
    Mage.numinstacia += 1;
  }
   
  
  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage.numinstacia;
  }
}
  
export default Mage;