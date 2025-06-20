import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroserviceService {

  constructor() { }

  getHeroes() {
    return [
      { id: 1, name: 'Superman', team: 'Justice League' },
      { id: 2, name: 'Batman', team: 'Justice League' },
      { id: 3, name: 'pratik', team : 'Human'
      }
    ];
  }
}
