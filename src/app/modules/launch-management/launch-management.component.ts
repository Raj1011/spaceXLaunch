import { Component, OnInit } from '@angular/core';
import { ListComponent } from './list/list.component';
import { FiltersComponent } from './filters/filters.component';

@Component({
  selector: 'app-launch-management',
  templateUrl: './launch-management.component.html',
  styleUrls: ['./launch-management.component.scss']
})
export class LaunchManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
