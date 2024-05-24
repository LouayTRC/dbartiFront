import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm!:FormGroup
  file!:File
  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router,private fireStorage:AngularFireStorage){}

  ngOnInit(){
    this.signupForm=this.fb.group({
      username:[''],
      fullname:[''],
      mail:[''],
      password:[''],
      pic:['']
    })
  }

  async signup(){
    console.log("form",this.signupForm.value);
    if (this.file) {
      this.signupForm.value.pic=await this.uploadPic(this.file)
    } else {
      this.signupForm.value.pic="assets/new.png"
    }
    this.authService.signup(this.signupForm.value).subscribe((res)=>{
      console.log("res singup",res);
      this.router.navigate(['/main/login'])
    })
  }

  onFileChange(event:any){
    this.file=event.target.files[0];
    console.log("dd",this.file);
  }
  async uploadPic(f:File){
    const path=`users/${this.file.name}`
    const upload=await this.fireStorage.upload(path,this.file)
    const url=await upload.ref.getDownloadURL()
    return url;    
  }
}
