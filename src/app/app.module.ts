import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SplitButtonModule} from "primeng/splitbutton";
import {AccordionModule} from "primeng/accordion";
import {FormsModule} from "@angular/forms";
import {TabMenuModule} from "primeng/tabmenu";
import {FlexModule} from "@angular/flex-layout";
import { SideBarComponent } from './side-bar/side-bar.component';
import {RatingModule} from "primeng/rating";
import { HeaderComponent } from './header/header.component';
import {RippleModule} from "primeng/ripple";
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { DashboardComponent } from './side-bar/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    SubHeaderComponent,
    DashboardComponent,
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
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
