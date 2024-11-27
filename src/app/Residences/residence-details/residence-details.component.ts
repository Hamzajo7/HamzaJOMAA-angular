import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent {
  residenceId!: number;

  constructor(private route: ActivatedRoute) {
    this.residenceId = +this.route.snapshot.paramMap.get('id')!;
  }
  
  nextResidence() {
    this.residenceId += 1;  // Logique simplifiée, vous pouvez ajuster cela selon les données disponibles.
  }
  
}
