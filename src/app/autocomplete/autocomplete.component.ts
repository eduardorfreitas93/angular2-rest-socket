import {Component, ElementRef} from '@angular/core';
import {RestService} from "../services/rest.service";
import {Subject} from "rxjs";

@Component({
  selector: 'autocomplete',
  templateUrl: './autocomplete.component.html',
})
export class AutocompleteComponent {

  public query = '';
  public countries;
  public filteredList = [];
  public elementRef;
  private search$ = new Subject();

  constructor(private restService: RestService, private myElement: ElementRef) {
    this.elementRef = myElement;
  }

  ngOnInit() {
    this.search$
      .debounceTime(500)
      .switchMap(data => this.restService.getTodoOne(data))
      .subscribe(data => {
        this.countries = data;
      });
  }

  filter() {
    this.search$.next(this.query);
  }

  select(item) {
    console.log(item);
  }
}
