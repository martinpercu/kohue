import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-joinedmaillist',
  standalone: true,
  imports: [],
  templateUrl: './joinedmaillist.component.html',
  styleUrl: './joinedmaillist.component.css'
})
export class JoinedmaillistComponent {

  private router = inject(Router);

  navToRoot() {
    this.router.navigate(['/'])
  }

}
