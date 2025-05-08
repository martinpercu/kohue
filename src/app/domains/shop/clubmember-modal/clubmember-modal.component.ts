import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-clubmember-modal',
  standalone: true,
  imports: [],
  templateUrl: './clubmember-modal.component.html',
  styleUrl: './clubmember-modal.component.css'
})
export class ClubmemberModalComponent {

  @Output() showClubMemberModal = new EventEmitter();


  closeClubMemberModal() {
    // alert('CLOSE ALERT this fall 2024. Stay tuned!')
    this.showClubMemberModal.emit(false);
  };

  openStayAlert() {
    // alert('CLOSE ALERT this fall 2024. Stay tuned!')
    this.showClubMemberModal.emit(true);
  };


}
