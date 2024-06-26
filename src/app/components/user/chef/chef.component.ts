import { Component } from '@angular/core';
import { ChatbotService } from 'src/app/services/chatbot.service';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent {
  messages:String[]=[]
  constructor(private cService:ChatbotService){}

  sendMessage(message:String){
    this.messages.push(message)
    this.cService.sendMessage(message).subscribe((res)=>{
      console.log("msg",res);
      this.messages.push(res.response)
      
    })
  }
}
