import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';

@Component({
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = []
  public regions:string[] = ["Africa","Americas","Asia","Europe","Oceania"]
  public selectedRegion?:string

  constructor(private countryService: CountryService) { }



  searchByRegion(region: string) {

    this.selectedRegion = region

    this.countryService.searchRegion(region).subscribe(countries => {
      this.countries = countries
    })
  }
}
