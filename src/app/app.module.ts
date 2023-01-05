import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SplitButtonModule} from 'primeng/splitbutton';
import {AccordionModule} from 'primeng/accordion';
import {FormsModule} from '@angular/forms';
import {TabMenuModule} from 'primeng/tabmenu';
import {FlexModule} from '@angular/flex-layout';
import { SideBarComponent } from './side-bar/side-bar.component';
import {RatingModule} from 'primeng/rating';
import { HeaderComponent } from './header/header.component';
import {RippleModule} from 'primeng/ripple';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { DashboardComponent } from './side-bar/dashboard/dashboard.component';
import {ChartModule} from 'primeng/chart';
import {ImageModule} from 'primeng/image';
import { ListComponent } from './side-bar/list/list.component';
import {TableModule} from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';
import {PaginatorModule} from "primeng/paginator";
import { SubHeaderListComponent } from './side-bar/list/sub-header-list/sub-header-list.component';
import {InputTextModule} from "primeng/inputtext";

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    SubHeaderComponent,
    DashboardComponent,
    ListComponent,
    SubHeaderListComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SplitButtonModule,
        AccordionModule,
        FormsModule,
        TabMenuModule,
        FlexModule,
        RatingModule,
        RippleModule,
        ChartModule,
        ImageModule,
        TableModule,
        CheckboxModule,
        PaginatorModule,
        InputTextModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
