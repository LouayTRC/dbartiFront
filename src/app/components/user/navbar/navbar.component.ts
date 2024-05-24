import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user!:any

  constructor(private authService:AuthService){}

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.user = user
      console.log( user )
      if (user) {
        this.user=user
      }
      
    })

  }

  logout(){
    this.authService.logout()
  }

}
