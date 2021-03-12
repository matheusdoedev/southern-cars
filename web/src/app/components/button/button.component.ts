import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input('content') content: string = '';
  @Input('icon') icon: string = '';
  @Input('secondary') secondary: boolean = false;
}
