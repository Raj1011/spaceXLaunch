import { Component, OnInit } from '@angular/core';
import { SpacexService } from './../../../services/spacex.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  filterYears: any = ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020']
  yearToFilter: any;
  launchFilter: boolean;
  landingFilter: boolean;
  constructor(
    private spacexService: SpacexService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    
  }

  filterByYear(year){
    this.yearToFilter = year;

    this.getSpacexLaunches();
  }
  filterByLaunch(value){
    if(value === 'true'){
      this.launchFilter = true;
    }else{
      this.launchFilter = false;
    }

    this.getSpacexLaunches();
  }
  filterByLanding(value){
    if(value === 'true'){
      this.landingFilter = true;
    }else{
      this.landingFilter = false;
    }

    this.getSpacexLaunches();
  }

  getSpacexLaunches(){
    const filters = {}

    if(this.yearToFilter){
      filters['launch_year'] = this.yearToFilter;
    }
    if(this.launchFilter != undefined){
      filters['launch_success'] = this.launchFilter;
    }
    if(this.landingFilter != undefined){
      filters['land_success'] = this.landingFilter;
    }
    this.spinner.show();
    this.spacexService.getSpaceXList(filters).subscribe((response)=>{
      this.spinner.hide();
      if(response){
        this.spacexService.updateFilteredLaunches(response);
      }
    }, err=>{
      this.spinner.hide();
    })
  }

}
