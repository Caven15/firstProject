import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/Home/nav-bar/nav-bar.component';
import { AccueilComponent } from './components/Home/accueil/accueil.component';
import { BindingOneWayComponent } from './components/Demos/binding-one-way/binding-one-way.component';
import { FormsModule } from '@angular/forms';
import { BindingTwoWayComponent } from './components/Demos/binding-two-way/binding-two-way.component';
import { EventBindingComponent } from './components/Demos/event-binding/event-binding.component';
import { AttributeBindingComponent } from './components/Demos/attribute-binding/attribute-binding.component';
import { PipesComponent } from './components/Demos/pipes/pipes.component';
import { DegToFahrPipe } from './shared/customPipes/deg-to-fahr.pipe';
import { FahrToDegPipe } from './shared/customPipes/fahr-to-deg.pipe';
import { ChronoComponent } from './components/exercices/chrono/chrono.component';
import { NotFoundComponent } from './components/Home/not-found/not-found.component';
import { DirectivesComponent } from './components/Demos/directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AccueilComponent,
    BindingOneWayComponent,
    BindingTwoWayComponent,
    EventBindingComponent,
    AttributeBindingComponent,
    PipesComponent,
    DegToFahrPipe,
    FahrToDegPipe,
    ChronoComponent,
    NotFoundComponent,
    DirectivesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
