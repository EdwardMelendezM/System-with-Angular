import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';

@Component({
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {
  public countries: Country[] = []
  constructor(private countryService: CountryService) { }

  searchByName(term: string) {
    this.countryService.searchCountries(term).subscribe(countries => {
      this.countries = countries
    })
  }
}
