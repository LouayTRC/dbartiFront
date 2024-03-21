export class Post {
    constructor(public id:Number,public title:String,public description:String,public nbLikes:Number,public comments?:Comment[],public pic?:String){}
}
