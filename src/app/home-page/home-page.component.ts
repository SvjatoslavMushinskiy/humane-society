import { Component, EventEmitter, OnInit } from '@angular/core';

import { AnimalService } from '../shared/animal.service';
import { Animal } from '../shared/interfaces';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material';
import { PAGE_SIZE } from './paginator.contstant';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
  animals$: Observable<Animal[]>;
  searchStr = '';
  pageSize = PAGE_SIZE;
  pageIndex = 0;

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.animalService.getAll();

    this.animals$ = this.animalService.data;
  }

  setNewPage(pageEvent: PageEvent) {
    this.pageIndex = pageEvent.pageIndex;
  }

}
