import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardDetails, cardDetails } from '../constants/data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cardArr: CardDetails = cardDetails;
}
