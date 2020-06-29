/***************************
 * PRIMITIVES
 ***************************/

// Array
const arr = [10, 20, 30, 40, 50]

// Sum
const sum = arr.reduce((a, b) => a + b, 0);
sum;

// Random Value
const r = arr[Math.floor(Math.random() * arr.length)];
r;

// Value by Index
const valueByIndex = arr[0];
valueByIndex;

const lastValue = arr[arr.length - 1];
lastValue;

// Hero Object

// string enum
enum roles {
	tank = "tank",
	support = "support",
	damage = "damage",
}

// HeroData Interface
interface HeroData {
	readonly name: string
	damage?: number,
	role: roles
}

// Hero Object
const Hero = <HeroData>{
	name: "Lissandra",
	damage: 50,
	role: roles.damage
}

Hero;

/***************************
 * COMPLEX TYPES
 ***************************/

class PlayerHero {
	name: string;
	private items: string[];
	readonly health: number;

	get isAlive(): boolean { return this._isAlive };
	set isAlive(value: boolean) {
		value = this.health >= 1 ? true : false
		this._isAlive = value;
	}

	private _isAlive: boolean;
	
	addItem(item: string) {
		this.items.push(item);
	}

	removeItem(item: string) {
		if(this.items.find(el => el === item)) {
			const i = this.items.indexOf(item);
			this.items.splice(i, 1);
		}
	}

	constructor(
		heroName: string,
		heroItems: string[],
		heroHealth: number,
		heroAlive: boolean,
	) {
		this.name = heroName;
		this.items = heroItems;
		this.health = heroHealth;
		this.isAlive = heroAlive;
	}


}

let playerHero = new PlayerHero (Hero.name, [], 100, true);
playerHero;

playerHero.addItem("doran-ring");
playerHero.addItem("oblivion-orb");
playerHero.addItem("broken-stopwatch");

playerHero.removeItem("doran-ring");

playerHero

