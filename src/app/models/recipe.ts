import { Category } from "./category";
import { Ingredient } from "./ingredient";

export class Recipe {
    constructor(public id:number,public title:String,public description:String,public ingredients:Ingredient[],
        public duration:number,public pic:String,public nbCalories:number,public category:Category,public tuto?:String){}
}
