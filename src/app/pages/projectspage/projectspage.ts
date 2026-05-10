import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';
import { Projectcard } from '../../components/projectcard/projectcard';

@Component({
  selector: 'app-projectspage',
  standalone: true,
  imports: [CommonModule, Header, Projectcard],
  templateUrl: './projectspage.html',
  styleUrls: ['./projectspage.css'],
})
export class Projectspage {}
