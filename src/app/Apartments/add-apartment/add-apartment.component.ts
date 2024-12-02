import { Component } from '@angular/core';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
    apartment = {
    apartNum: null,
    floorNum: null,
    surface: null,
    terrace: false,
    surfaceterrace: null,
    category: '',
    ResidenceId: null,
};

saveApartment(): void {
    console.log('Apartment details:', this.apartment);
    // Vous pouvez ajouter une logique pour envoyer ces données à un serveur.
}
}
