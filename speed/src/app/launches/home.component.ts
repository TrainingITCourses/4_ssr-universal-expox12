import { Component, OnInit } from '@angular/core';
import { ApiService } from '../store/api.service';
import { Launch } from '../store/models/launch';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public launches: Launch[];
  public counter: number = 0;

  constructor(public apiService: ApiService) { }

  ngOnInit() {
  }

  onSelectFilter(filter) {
    if(filter.value == 0) return;
    this.apiService.getLaunches(filter).subscribe(res => {
      this.launches = Object.assign([], res);
      console.log(this.launches);
      this.counter = this.launches.length;

    }, error => {
      console.error("error");
    });
  }

}
