import { Component, OnInit } from '@angular/core';
import { SpacexService } from './../../../services/spacex.service'
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  spacexData: any = [];
  constructor(
    private spacexService: SpacexService,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.getSpacexList();

    this.spacexService.filteredLaunches.subscribe(response=>{
      this.spacexData = response || [];
    })
  }

  getSpacexList(){
    this.spinner.show();
    const filters = {};
    this.spacexService.getSpaceXList(filters).subscribe((resposne)=>{
      this.spacexData = resposne || [];
      this.spinner.hide();
    }, err=>{
      this.spinner.hide();
    })
  }

}
