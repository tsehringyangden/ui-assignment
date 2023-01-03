import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  // list?: boolean = this.activatedRoute.snapshot.queryParams['action'] === 'list';
  users: any = [
    {
      list_item: 'SEO Agiencies',
      Create_on: '21 May 2022',
    },
    {
      list_item: 'SEO Agiencies',
      Create_on: '21 May 2022',
    },
    {
      list_item: 'SEO Agiencies',
      Create_on: '21 May 2022',
    },
    {
      list_item: 'SEO Agiencies',
      Create_on: '21 May 2022',
    },
    {
      list_item: 'SEO Agiencies',
      Create_on: '21 May 2022',
    },
    {
      list_item: 'SEO Agiencies',
      Create_on: '21 May 2022',
    },
    {
      list_item: 'SEO Agiencies',
      Create_on: '21 May 2022',
    },
    {
      list_item: 'SEO Agiencies',
      Create_on: '21 May 2022',
    },
    {
      list_item: 'SEO Agiencies',
      Create_on: '21 May 2022',
    }
  ]
  totalRecords: any;

  // constructor(private activatedRoute: ActivatedRoute) {
  // }
  constructor(private router:Router) {}

  label() {
    this.router.navigate([`app-list`], {
      queryParams: {
        action: 'list'
      }
    })
  }

}
