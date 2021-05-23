import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements AfterViewInit {
  @Input() name: string = '';
  @Input() title: string = '';
  @Input() children: string = '';

  constructor() {}

  ngAfterViewInit(): void {
    const modal = document.getElementById(this.name);

    if (modal) {
      modal.appendChild(
        document.createElement('div')
      ).innerHTML = this.children;
    }
  }
}
