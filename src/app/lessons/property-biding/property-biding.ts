import { Component } from '@angular/core';
import { PropertyBidingExo } from '../../exos/property-biding/property-biding-exo';

@Component({
  selector: 'app-property-biding',
  imports: [PropertyBidingExo],
  templateUrl: './property-biding.html',
  styleUrl: './property-biding.css'
})
export class PropertyBiding {
  lienDynamique:string = "https://www.google.com/?hl=fr&zx=1758545776710&no_sw_cr=1";
}
