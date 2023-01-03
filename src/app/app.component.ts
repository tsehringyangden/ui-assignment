import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ass-1';
  items: MenuItem[]=[];
  activeItem!: MenuItem;
  list?: boolean = this.activatedRoute.snapshot.queryParams['action'] === 'list';
  constructor(private activatedRoute: ActivatedRoute){}

}
