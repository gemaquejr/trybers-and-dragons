import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static numinstacia = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);  
    this._maxLifePoints = 99;
    Elf.numinstacia += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
   
  static createdRacesInstances(): number {
    return Elf.numinstacia;
  }
}
  
export default Elf;