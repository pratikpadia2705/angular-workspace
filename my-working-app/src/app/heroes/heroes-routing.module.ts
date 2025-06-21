import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { HerolistComponent } from './herolist/herolist.component';

const routes: Routes = [{ path: '', component: HeroComponent },
                        { path: 'herolist', component: HerolistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
