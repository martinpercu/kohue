import { Component, Input, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-expandable-text',
  standalone: true,
  imports: [NgClass],
  templateUrl: './expandable-text.component.html',
})
export class ExpandableTextComponent {
  @Input() textA: string | undefined = '';
  @Input() textB: string | undefined = '';

  isExpanded = signal(false);

  toggle() {
    this.isExpanded.set(!this.isExpanded());
  }
}
