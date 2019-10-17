import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit } from '@angular/core';

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
  genderType = '';
  pageSize = PAGE_SIZE;
  pageIndex = 0;
  petType = '';
  searchStr = '';

  constructor(
    private animalService: AnimalService,
    private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.animalService.getAll();
    this.animals$ = this.animalService.data;
    this.cdr.markForCheck();
  }

  public changeAnimalType(event) {
    this.pageIndex = 0;
    this.animalType = event.value;
    this.cdr.markForCheck();
  }

  public changeGender(event) {
    this.pageIndex = 0;
    this.gender = event.value;
    this.cdr.markForCheck();
  }

  public changeSearchFilter(event) {
    this.pageIndex = 0;
    this.searchStr = event;
    this.cdr.markForCheck();
  }

  public setNewPage(pageEvent: PageEvent) {
    this.pageIndex = pageEvent.pageIndex;
    this.cdr.markForCheck();
  }
}
