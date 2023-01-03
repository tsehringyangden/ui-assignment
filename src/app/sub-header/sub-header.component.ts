import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent {
  list?: boolean = this.activatedRoute.snapshot.queryParams['action'] === 'list';
  constructor(private activatedRoute: ActivatedRoute){}

}
