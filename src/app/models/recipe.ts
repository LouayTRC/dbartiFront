import { Category } from "./category";
import { Ingredient } from "./ingredient";

export class Recipe {
<<<<<<< HEAD
    constructor(public id:Number,public title:String,public description:String,public ingredients:Ingredient,
        public duration:Number,public pic:String,public nbCalories:Number,public category:Category,tuto?:String){}
=======
    constructor(public id:Number,public title:String,public description:String,public ingredients:Ingredient[],public duration:Number,public pic:String,public nbCalories:Number,public category:Category,tuto?:String){}
>>>>>>> 264fb66a5fbfd0120ac858add421b9eb8211db71
}
