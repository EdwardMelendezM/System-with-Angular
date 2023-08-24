import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap } from 'rxjs';

@Component({
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router ,
      private countriesService:CountryService
    ){}

  ngOnInit(): void {
    this.activatedRoute.params
        .pipe(
          switchMap(({id})=> this.countriesService.searchCountryByAlphaCode(id))
        )
        .subscribe( country=>{
          if(!country){
            return this.router.navigateByUrl("")
          }
          return
        } )
  }

}
