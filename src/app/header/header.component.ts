import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  list?: boolean = this.activatedRoute.snapshot.queryParams['action'] === 'list';
  constructor(private activatedRoute: ActivatedRoute) {
  }

}
