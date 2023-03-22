import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static numinstacia = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);  
    this._maxLifePoints = 80;
    Dwarf.numinstacia += 1;
  }
  
  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
   
  static createdRacesInstances(): number {
    return Dwarf.numinstacia;
  }
}
  
export default Dwarf;