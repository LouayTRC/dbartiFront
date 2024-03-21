import { User } from "./user";

export class Comment {
    constructor(public id:Number,public user:User,public description:String,public date:Date,public comments?:Comment[]){}
}
