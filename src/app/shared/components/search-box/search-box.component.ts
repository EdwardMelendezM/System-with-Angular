import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit {

  private debouncer:Subject<string> = new Subject<string>()

  @Input() public placeholder :string =''

  @Output() onValue = new EventEmitter<string>()

  @Output() public onDebounce = new EventEmitter<string>()

  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(400)
      )
      .subscribe(value=>{
        this.onDebounce.emit(value)
      })
  }

  onKeyPress(searchTerm: string){
    this.debouncer.next(searchTerm)
  }
}


