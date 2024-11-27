import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

  export class HomeComponent {
    listResidences = [
      { id: 1, name: "Residence 1", address: "Address 1", status: "Disponible" },
      { id: 2, name: "Residence 2", address: "Address 2", status: "En Construction" },
      // ... autres résidences
    ];
  }
  
