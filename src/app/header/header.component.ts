import { Component } from '@angular/core';
import {NgStyle} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    NgStyle,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
