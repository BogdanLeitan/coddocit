import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'landing-page',
  imports: [CommonModule, Header],
  templateUrl: './landingpage.html',
  styleUrls: ['./landingpage.css'],
})
export class Landingpage {}