import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = []
  constructor(private countryService:CountryService){}

  searchByCapital(term:string){
    console.log("Desde byCapitalPage")
    this.countryService.searchCapital(term).subscribe( countries=>{
      this.countries=countries
    } )
  }
}
