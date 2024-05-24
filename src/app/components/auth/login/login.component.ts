import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!:FormGroup
  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router){}
  
  ngOnInit(){
    this.loginForm=this.fb.group({
      username:[''],
      password:[''],
    })
  }
  
  login(){
    console.log('login form',this.loginForm.value);
    
    this.authService.login(this.loginForm.value).subscribe((res)=>{
      console.log("res login",res);
      this.authService.setUser(res.user)
      if (res.user.role=="USER") {
        this.router.navigate(['/main'])
      }
      if(res.user.role=="ADMIN"){
        this.router.navigate(['/dashboard'])
      }
      
    })
  }
}
