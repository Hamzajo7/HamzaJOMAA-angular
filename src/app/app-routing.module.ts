import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AddResidenceComponent } from './Residences/add-residence/add-residence.component';
import { ResidencesComponent } from './Residences/residences/residences.component';
import { ResidenceDetailsComponent } from './Residences/residence-details/residence-details.component';
import { ApartmentsComponent } from './Apartments/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './Apartments/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './Apartments/add-apartment/add-apartment.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'residences', component: ResidencesComponent },
  { path: 'residences/:id', component: ResidenceDetailsComponent },
  { path: 'add-residence', component: AddResidenceComponent },
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'residences/:id/apartments', component: ApartmentsByResidenceComponent },
  { path: 'add-apartment', component: AddApartmentComponent },
  { path: '**', component: NotFoundComponent }  // Route pour les erreurs 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
