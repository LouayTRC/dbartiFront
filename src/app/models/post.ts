import { Comment } from "./comment";
import { User } from "./user";

export class Post {
    constructor(public id:number,public title:String,public description:String,public user:User,public date:Date,public nbLikes:number,public comments:Comment[],public pic?:String){}
}
