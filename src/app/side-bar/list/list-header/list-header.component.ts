import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss']
})
export class ListHeaderComponent {
  list?: boolean = this.activatedRoute.snapshot.queryParams['action'] === 'list';
  constructor(private activatedRoute: ActivatedRoute) {
  }
}
