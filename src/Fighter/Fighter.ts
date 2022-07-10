import Energy from '../Energy';

export default interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  // Pesquisa sobre Optional Properties em https://stackoverflow.com/questions/47942141/optional-property-class-in-typescript
  energy?: Energy;
  
  attack(enemy: Fighter): void;
  special(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}