import troll from './troll.json';
import ghoul from './ghoul.json';
import gnoll from './gnoll.json';
import bugbear from './bugbear.json';
import adultBlackDragon from './adult-black-dragon.json';
import owlbear from './owlbear.json';
import skeleton from './skeleton.json';
import monsterList from './monster-list.json';
import gelatinousCube from './gelatinous-cube.json';
import Character from '../character';

interface MonsterDetail {
	name: string,
	image: string
}

type GetMonster = (i: string) => MonsterDetail;

const getMonsterList = () => {
	return monsterList.results;
}

const getPartyList = () => {
	return [
		new Character("Vargus", 17, 13),
		new Character("Ezmerelda", 23, 17),
		new Character("Conan", 50, 15)
	]
}

const getMonsterDetail: GetMonster = (index: string) => {
	switch (index) {
		case "adult-black-dragon":
			return adultBlackDragon;
		case "bugbear":
			return bugbear;
		case "ghoul":
			return ghoul;
		case "gnoll":
			return gnoll;
		case "owlbear":
			return owlbear;
		case "skeleton":
			return skeleton;
		case "troll":
			return troll;
		case "gelatinous-cube":
			return gelatinousCube;
		default:
			return {
				name: "Unknown",
				image: "NA"
			}
	}
}

export {getMonsterDetail, getMonsterList, getPartyList};