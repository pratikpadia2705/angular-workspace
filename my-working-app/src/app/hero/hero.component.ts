import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  @Input() name: string ='' ;
  @Input() age: number = 0;
  @Output() isLiked= new EventEmitter<string>();
  @Output() isDisliked = new EventEmitter<string>();

  
}
