import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './side-bar/dashboard/dashboard.component';
import {ListComponent} from './side-bar/list/list.component';
import {SideBarComponent} from "./side-bar/side-bar.component";

const routes: Routes = [
  { path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  { path: 'listing', component: ListComponent},
  { path: 'sidebar', component: SideBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
