import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AgegateComponent } from '@shared/agegate/agegate.component';
import { environment } from '@env/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AgegateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = environment.TITLE_INDEX;
  constructor()  {
    // if(environment.REDIRECT_TO_KOHUE) {
    //   // alert("Estamos para ir a KOHUE");
    //   window.location.href = 'https://kohuewines.com';
    // }
    // if(!environment.REDIRECT_TO_KOHUE) {
    //   // alert("Estamos En KOHUE");
    // }
  }
}
