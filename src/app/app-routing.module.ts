import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { LaunchManagementComponent } from './modules/launch-management/launch-management.component';
import { ListComponent } from './modules/launch-management/list/list.component';
import { FiltersComponent } from './modules/launch-management/filters/filters.component';

const routes: Routes = [{
  path: '',
  component: LaunchManagementComponent
},{
  path: 'launches',
  component: LaunchManagementComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
