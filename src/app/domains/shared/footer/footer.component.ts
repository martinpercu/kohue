import { Component,inject} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  emailstring = "mailto:info@kohuewines.com?subject=Hello everyone";

  private router = inject(Router);


  navCredits() {
    this.router.navigate(['credits']);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };


}
