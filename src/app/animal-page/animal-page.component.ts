import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AnimalService } from '../shared/animal.service';
import { Observable, of } from 'rxjs';
import { Animal } from '../shared/interfaces';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-animal-page',
  templateUrl: './animal-page.component.html',
  styleUrls: ['./animal-page.component.scss']
})
export class AnimalPageComponent implements OnInit {

  animal$: Observable<Animal>;

  constructor(
    private route: ActivatedRoute,
    private animalService: AnimalService
  ) {
  }

  ngOnInit() {
    this.animal$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.animalService.getById(params['id']);
      }));
  }

  adoptMe(animal: Animal) {
    this.animalService.editById(animal.id, {
      ...animal,
      isAdopted: true
    }).subscribe((data) => {
      this.animal$ = of(data); // TODO...
    });
  }

}
