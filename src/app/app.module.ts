import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule, MatRadioModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AnimalPageComponent } from './animal-page/animal-page.component';
import { AnimalComponent } from './shared/components/animal/animal.component';
import { AlertService } from './shared/services/alert.service';
import { AlertComponent } from './shared/components/alert/alert.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SearchPipe } from './shared/search.pipe';
import { SplicePipe } from './shared/splice.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    AnimalPageComponent,
    AnimalComponent,
    SearchPipe,
    SplicePipe,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NoopAnimationsModule,
    MatRadioModule,
    MatPaginatorModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
