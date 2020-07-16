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
// todo: enum naming standard, also i suggest suffix naming with `XXXType` (most of the cases for enum)
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
// todo: instead of type assertion <HeroData> - thats the only covention we dont use - prefer using typing rather than type assertion in this case https://www.typescriptlang.org/docs/handbook/basic-types.html\
// todo: naming standard const - we either SNAKE_CASE or simply camel. go for camel
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
	set isAlive(value: boolean) { // this is not good as it will only change when manually set - find another way how to make it so that when the health is 0 `isAlive` is changed to false.
		value = this.health >= 1 ? true : false
		this._isAlive = value;
	}

	private _isAlive: boolean;
	
	addItem(item: string) {
		this.items.push(item);
	}

	removeItem(item: string) {
		// todo: altho this is good - install lodash and use that to remove the item from the array - hint: you need to have `@types/lodash` installed for TS
		if(this.items.find(el => el === item)) {
			const i = this.items.indexOf(item);
			this.items.splice(i, 1);
		}
	}

	kill() {
		// todo: implement.
	}

	// todo: standard - this should be moved before methods
	constructor(
		heroName: string,
		heroItems: string[],
		heroHealth: number,
		heroAlive: boolean, // todo: this shouldnt be an option as its derived from health
	) {
		// todo: shorter way - in TS you can do these in a better way, to define and assign ctor params - see https://www.typescriptlang.org/docs/handbook/classes.html#parameter-properties (in our code we do it 100%)
		this.name = heroName;
		this.items = heroItems;
		this.health = heroHealth;
		this.isAlive = heroAlive;
	}


}

let playerHero = new PlayerHero ("Chiko", Hero); // todo: make it work (this how it should be to do the uncomplete task #1 below)
playerHero;

playerHero.isAlive = false; // this shouldnt be allowed
playerHero.hero.name = "Ryze"; // this shouldnt be allowed
playerHero.hero.name; // should be Lissandra

playerHero.isAlive; // should be true
playerHero.kill();
playerHero.isAlive; // should be false

playerHero.addItem("doran-ring");
playerHero.addItem("oblivion-orb");
playerHero.addItem("broken-stopwatch");

playerHero.removeItem("doran-ring");

playerHero;

// uncomplete tasks:
// 1. When initializing a `PlayerHero` you need to pass `HeroData` object exposed as `hero` + `name`, which will be used for the name (in order for the player to choose a Hero and assign his `name`)