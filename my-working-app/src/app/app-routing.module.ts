import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './heroes/hero/hero.component';


const routes: Routes =[{
    path: 'heroes', // When the URL is /heroes, load the HeroesModule
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)
  }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
