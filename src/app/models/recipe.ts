import { Category } from "./category";
import { Ingredient } from "./ingredient";

export class Recipe {
    constructor(public id:Number,public title:String,public description:String,public ingredients:Ingredient,
        public duration:Number,public pic:String,public nbCalories:Number,public category:Category,tuto?:String){}
}
