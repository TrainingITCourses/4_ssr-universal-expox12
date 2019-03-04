import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterSelectComponent implements OnInit {

  @Input() public criterionValues: any[];
  @Output() public changeFilterValue = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public selectFilterValue( filterValue ) {
    const valueId = parseInt(filterValue, 10);
    this.changeFilterValue.next(valueId);
  }

}
