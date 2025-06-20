import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { of, from } from 'rxjs';
import { HeroserviceService } from '../service/heroservice.service';
@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  providers: [HeroserviceService]
})
export class HeroComponent implements OnInit {

  @Input() name: string = '';
  @Input() age: number = 0;
  @Output() isLiked = new EventEmitter<string>();
  @Output() isDisliked = new EventEmitter<string>();
  heroes: any[] = [];
  constructor(private heroSerivice: HeroserviceService) {
  }

  ngOnInit() {
    this.heroes = this.heroSerivice.getHeroes();
    console.log('Heroes from service:', this.heroes);
    const vals = of(1, 2, 3, 4, 5, 6, 7, 8);
    vals.subscribe(value => console.log(value));
    const vals2 = from([10, 11, 12, 13, 14, 15]);
    vals2.subscribe(val => console.log(val));

  }

}
