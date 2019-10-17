import { ChangeDetectionStrategy, Component, EventEmitter, OnInit } from '@angular/core';

import { PageEvent } from '@angular/material';
import { AnimalService } from '../shared/services/animal.service';
import { Animal } from '../shared/interfaces';
import { Observable } from 'rxjs';
import { PAGE_SIZE } from './paginator.contstant';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomePageComponent implements OnInit {
  animals$: Observable<Animal[]>;
  animalType = '';
  gender = '';
  pageSize = PAGE_SIZE;
  pageIndex = 0;
  searchStr = '';

  constructor(
    private animalService: AnimalService) {
  }

  ngOnInit(): void {
    this.animalService.getAll();
    this.animals$ = this.animalService.data;
  }

  public changeAnimalType(event) {
    this.pageIndex = 0;
    this.animalType = event.value;
  }

  public changeGender(event) {
    this.pageIndex = 0;
    this.gender = event.value;
  }

  public changeSearchFilter(event) {
    this.pageIndex = 0;
    this.searchStr = event;
  }

  public setNewPage(pageEvent: PageEvent) {
    this.pageIndex = pageEvent.pageIndex;
  }
}
