
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
clickme() {
alert('hallo')
}
  protected title = 'dataBinding';
  message = 'WELCOME TO MY BLOG';
  imageUrl: string = "https://media.istockphoto.com/id/2196418214/photo/top-down-view-of-diverse-colleagues-working-in-corporate-office-of-hedge-fund-using-desktop.webp?a=1&b=1&s=612x612&w=0&k=20&c=5HZgdz_WH0F8tZBLfFlRWuIZvkSrCMK8sAiDz9g2phQ=";
 
}