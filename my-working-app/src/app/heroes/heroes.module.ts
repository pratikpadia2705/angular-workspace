import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HerolistComponent } from './herolist/herolist.component';
import { HeroComponent } from './hero/hero.component';


@NgModule({
  declarations: [
    HerolistComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    
  ]
})
export class HeroesModule { }
