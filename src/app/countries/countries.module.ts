import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { ModalCommentsComponent } from './components/modal-comments/modal-comments.component';
import { PipesPageComponent } from './pages/pipes-page/pipes-page.component';
import {CustomPipe} from "../pipes/custom.pipe";
import {SortByPipe} from "../pipes/sort.by.pipe";



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    CountryTableComponent,
    ModalCommentsComponent,
    PipesPageComponent,
    CustomPipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ]
})
export class ContriesModule { }
