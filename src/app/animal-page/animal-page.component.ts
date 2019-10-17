import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { AlertService } from '../shared/services/alert.service';
import { AnimalService } from '../shared/services/animal.service';
import { Animal } from '../shared/interfaces';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-animal-page',
  templateUrl: './animal-page.component.html',
  styleUrls: ['./animal-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AnimalPageComponent implements OnInit {
  animal: Animal;

  constructor(
    private alert: AlertService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private animalService: AnimalService
  ) {
  }

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params: Params) => {
        return this.animalService.getById(params.id);
      }))
      .subscribe(data => {
        this.animal = data;
        this.cdr.markForCheck();
      });
  }

  public adoptMe(animal: Animal) {
    this.animalService.editById(animal.id, { ...animal, isAdopted: true })
      .subscribe((data) => {
        this.animal = data;
        this.alert.success('Pet was adopted');
        this.cdr.markForCheck();
      });
  }
}
