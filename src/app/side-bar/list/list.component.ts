import {Component} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
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
    }
  ]
  totalRecords: any;


}
