import { Launch } from '../../store/models/launch';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchesListComponent implements OnInit {

  @Input() public launchList: Launch[];

  constructor() { }

  ngOnInit() {
  }

}
