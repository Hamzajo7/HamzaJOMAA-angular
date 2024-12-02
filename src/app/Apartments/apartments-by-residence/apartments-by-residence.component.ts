import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css']
})
export class ApartmentsByResidenceComponent {
  residenceId!: number;
  apartments: any[] = []; // Remplissez ceci avec les appartements associés

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.residenceId = +this.route.snapshot.paramMap.get('id')!;
      console.log('Residence ID:', this.residenceId);

      this.apartments = [
          { apartNum: 101, floorNum: 1, surface: 75 },
          { apartNum: 102, floorNum: 1, surface: 80 },
      ];
  }
}
