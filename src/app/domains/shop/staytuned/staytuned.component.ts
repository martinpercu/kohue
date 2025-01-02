import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-staytuned',
  standalone: true,
  imports: [],
  templateUrl: './staytuned.component.html',
  styleUrl: './staytuned.component.css'
})
export class StaytunedComponent {

  @Output() showStayTuned = new EventEmitter();


  closeStayAlert() {
    // alert('CLOSE ALERT this fall 2024. Stay tuned!')
    this.showStayTuned.emit(false);
  };

  openStayAlert() {
    // alert('CLOSE ALERT this fall 2024. Stay tuned!')
    this.showStayTuned.emit(true);
  };


  doNothing() {
    // alert('DO NOTHING ! ! ! !')

    console.log('DO NOTHING');
    setTimeout(() => {
      console.log('100 milisecond passed');
      console.log("hey");

      // this.openStayAlert()
      this.showStayTuned.emit(true);
    }, 100);
  };

  closeFromOutsideStayAlert() {
    console.log("CLOSE FROM OUTSIDE");
    this.showStayTuned.emit(false);
  };


  handlerShowStayAlert(state: boolean) {
    console.log(state);
    this.showStayTuned.emit(state);
  };


}
