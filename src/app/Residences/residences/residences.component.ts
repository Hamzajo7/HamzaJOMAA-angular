import { Component } from '@angular/core';
import { Residence } from 'src/app/core/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {

  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/R1.jpeg", status: "Disponible"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/images/R2.jpg", status:
    "Disponible" },
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/R3.jpg", status:
    "Vendu"},
    {id:4,"name": "El Anber","address":"inconnu",
    "image":"../../assets/images/R4.jpg", status: "En Construction"}
    ];
residence: any;
    
    constructor() { }
  showLocation(residence: Residence): void {
    if (residence.address === 'inconnu') {
      alert(`L'adresse de la résidence ${residence.name} est inconnue`);
    } else {
      alert(`Adresse de ${residence.name} : ${residence.address}`);
    }
  }

  favorites: Residence[] = [];

  addToFavorites(residence: Residence): void {
    if (!this.favorites.includes(residence)) {
      this.favorites.push(residence);
      alert(`"${residence.name}" a été ajouté à vos favoris !`);
    } else {
      alert(`"${residence.name}" est déjà dans vos favoris.`);
    }
  }
  
  searchAddress: string = '';

filteredResidences(): Residence[] {
  return this.listResidences.filter(residence =>
    residence.address.toLowerCase().includes(this.searchAddress.toLowerCase())
  );
}
}



