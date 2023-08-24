import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncerSuscription?: Subscription
  private debouncer:Subject<string> = new Subject<string>()

  @Input() public placeholder :string =''

  @Output() onValue = new EventEmitter<string>()

  @Output() public onDebounce = new EventEmitter<string>()

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      .pipe(
        debounceTime(400)
      )
      .subscribe(value=>{
        this.onDebounce.emit(value)
      })
  }
  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe()
  }

  onKeyPress(searchTerm: string){
    this.debouncer.next(searchTerm)
  }
}


