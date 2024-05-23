import { Recipe } from "./recipe";

export class Favorites {
    constructor(public id:number,public title:String,public recipes:Recipe[],public pic:String){}
}
