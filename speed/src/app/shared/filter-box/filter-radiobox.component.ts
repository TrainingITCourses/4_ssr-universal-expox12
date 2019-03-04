import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-radiobox',
  templateUrl: './filter-radiobox.component.html',
  styleUrls: ['./filter-radiobox.component.css']
})
export class FilterRadioBoxComponent implements OnInit {

  @Output() public critValue = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onChangeCriterion(value) {
    this.critValue.next(value);
  }

}
