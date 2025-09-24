import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Navigation } from './navigation/navigation';
import { ButtonDisplay } from "./exos/button-display/button-display";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Navigation, ButtonDisplay],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-cours');
}
