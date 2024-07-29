import { Component } from '@angular/core';

import { NavbarComponent } from '@shared/navbar/navbar.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

}
