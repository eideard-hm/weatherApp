import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  inputSearch: FormControl = new FormControl('');

  @Output() submited: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.onChange();
  }

  private onChange(): void {
    this.inputSearch.valueChanges
      .pipe(
        map(search => search.trim()),
        debounceTime(850),
        distinctUntilChanged(),
        filter(search => search !== ''),
        tap(search => this.submited.emit(search))
      )
      .subscribe();
  }

}
