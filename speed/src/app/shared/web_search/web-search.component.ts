import { ApiService } from '../../store/api.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-web-search',
  templateUrl: './web-search.component.html',
  styleUrls: ['./web-search.component.css']
})
export class WebSearchComponent implements OnInit {

  public resultCrit: any = { id: 0, value: "status" };
  public filterValues: any[];

  @Output() public filterForLaunches = new EventEmitter();

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.onCritValueChange(this.resultCrit);
  }

  /*onCritValueChange(value: any) {
    this.resultCrit = value;
    // LLamada a la api para obtener el resultado según el tipo seleccionado
    // this.resultCrit = this.apiService.getCritResult(value)
    console.log(value);
  }*/

  onCritValueChange = (criterionType: any) => {
    this.resultCrit = criterionType;

    switch (this.resultCrit.value) {
      case 'status':
        this.apiService.getLaunchStatus().subscribe(data => {
          this.filterValues = data;
        });
        break;
      case 'agency':
        this.apiService.getAgencies().subscribe(data => {
          this.filterValues = data;
        });
        break;
      case 'mission':
        this.apiService.getMissions().subscribe(data => {
          this.filterValues = data;
        });
        break;
      default:
    }
    this.filterValues = Object.assign([], this.filterValues);
  }

  public onChangeFilterValue(el) {
    this.filterForLaunches.next({ type: this.resultCrit.value, value: el });
  }


}
