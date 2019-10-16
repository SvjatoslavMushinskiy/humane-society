import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AnimalService } from '../shared/animal.service';
import { Observable } from 'rxjs';
import { Animal } from '../shared/interfaces';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class AnimalPageComponent implements OnInit {

  post$: Observable<Animal>;

  constructor(
    private route: ActivatedRoute,
    private animalService: AnimalService
  ) {
  }

  ngOnInit() {
/*    this.post$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.postService.getById(params['id']);
      }));*/
  }

}
