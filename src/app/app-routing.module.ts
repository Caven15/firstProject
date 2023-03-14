import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeBindingComponent } from './components/Demos/attribute-binding/attribute-binding.component';
import { BindingOneWayComponent } from './components/Demos/binding-one-way/binding-one-way.component';
import { BindingTwoWayComponent } from './components/Demos/binding-two-way/binding-two-way.component';
import { EventBindingComponent } from './components/Demos/event-binding/event-binding.component';
import { PipesComponent } from './components/Demos/pipes/pipes.component';
import { ChronoComponent } from './components/exercices/chrono/chrono.component';
import { AccueilComponent } from './components/Home/accueil/accueil.component';

const routes: Routes = [
  {path : 'accueil', component : AccueilComponent},
  {path : 'bindingOneWay', component : BindingOneWayComponent},
  {path : 'bindingTwoWay', component : BindingTwoWayComponent},
  {path : 'eventBinding', component : EventBindingComponent},
  {path : 'attributeBinding', component : AttributeBindingComponent},
  {path : 'pipes', component : PipesComponent},
  {path : 'chrono', component : ChronoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
