import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import du FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponentComponent // Ajout du composant Résidences
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Ajout de FormsModule pour utiliser [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
