import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  menuIsOpen: boolean = false;
  constructor() {
    this.showMenu();
  }

  @ViewChild('btnMenu') button: ElementRef | undefined;
  @ViewChild('menu') menu: ElementRef | undefined;

  showMenu() {
    this.button?.nativeElement.addEventListener('click', () => {
      this.menu?.nativeElement.classList.toggle('hidden');
      this.menuIsOpen =!this.menuIsOpen;
    });
  }
}
