import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashbord-admin',
  templateUrl: './dashbord-admin.component.html',
  styleUrls: ['./dashbord-admin.component.css']
})
export class DashbordAdminComponent {
  constructor(private authService:AuthService){}

  logout(){
    this.authService.logout()
  }
}
