import { Component } from '@angular/core';

interface Hobbies {
  reading: string;
  cycling: string;
  cooking: string;
}

@Component({
  selector: 'app-text-interpolation',
  imports: [],
  templateUrl: './text-interpolation.html',
  styleUrl: './text-interpolation.css'
})
export class TextInterpolation {
  title: string = "Bienvenue"; // pas besoin de let pour déclarer la variable, on est dans une classe
  desciption: string = "Une description super précise";
  currentDate: Date = new Date();
  username: string = "John Doe";
  items: string[] = ['Item1', 'Item2', 'Item3'];
  hobbies: Hobbies = {
    reading: 'Intermédiaire',
    cycling: 'Avancé',
    cooking: 'Débutant',
  };

  // Méthode appelée dans le template
  getWelcomeMessage(): string {
    return `Bienvenue, ${this.username}, dans cette leçon d'Angular!`;
  }
}
