import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  imports: [NgFor],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css',
})
export class Pokemon {
  constructor(private apiService: PokemonService) {}
  newData: any;
 async ngOnInit() {
    this.newData = await this.apiService.fetchPokemonList();
    console.log(this.newData);
  }
}
