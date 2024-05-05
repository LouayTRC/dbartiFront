import { Recipe } from "./recipe";

export class Favorites {
    constructor(public id:Number,public name:String,public recipes?:Recipe[]){}
}
