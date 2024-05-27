import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent {
  postForm!:FormGroup
  user!:any
  posts!:Post[]
  constructor(private fb:FormBuilder,private authService:AuthService,private pservice:PostService){}

  ngOnInit(){
    this.postForm=this.fb.group({
      title:[''],
      description:['']
    })
    this.authService.user.subscribe((res)=>{
      this.user=res
      this.pservice.getAllPosts().subscribe((res2)=>{
        this.posts=res2.reverse()
      })
    })
  }

  addPost(){
    this.pservice.addPost(this.user.id,this.postForm.value).subscribe((res)=>{
      this.posts=this.posts.reverse()
      this.posts.push(res.post)
      this.posts=this.posts.reverse()
    })
  }

  addComment(idP:number,comment:String,index:number){
    this.pservice.commentPost(idP,this.user.id,comment).subscribe((res)=>{
      this.posts[index].comments.push(res.comment)
    })
  }
  likePost(id:number,i:number){
    this.pservice.likePost(id).subscribe((res)=>{
      this.posts[i].nbLikes+=1
    })
  }
}
