import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor( private http: HttpClient){

  }

  searchCapital(term:string):Observable<Country[]>  {
    
    return this.http.get <Country[]>(`${this.apiUrl}/capital/${term}`)
    .pipe(
      catchError(()=>of([]))
    )
  }

  searchCountries(term: string): Observable<Country[]> {

    return this.http.get<Country[]>(`${this.apiUrl}/name/${term}`)
      .pipe(
        catchError(() => of([]))
      )
  }

  searchRegion(term: string): Observable<Country[]> {

    return this.http.get<Country[]>(`${this.apiUrl}/region/${term}`)
      .pipe(
        catchError(() => of([]))
      )
  }

  searchCountryByAlphaCode(code: string): Observable<Country |null>{
    const url = `${ this.apiUrl }/alpha/${ code }`

    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null ),
        catchError(() => of(null))
      )
  }


}