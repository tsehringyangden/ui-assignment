import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  val1: any;
  items: any;
  status: any;

  ngOnInit() {
    this.items = [
      {label: 'DashBoard', icon: 'pi pi-fw pi-microsoft'},
      {label: 'List', icon: 'pi pi-fw pi-align-justify'},
      {label: 'Messages', icon: 'pi pi-fw pi-comment'},
      {label: 'Campaigns', icon: 'pi pi-fw pi-volume-up'}
    ];

    this.status= [
      {
        label: 'Billing',
        icon: 'pi pi-fw pi-book'
      },
      {
        label: 'Account',
        icon: 'pi pi-fw pi-circle-fill'
      },
      {
        label: 'Help',
        icon: 'pi pi-fw pi-filter'
      },

    ]

  }

}
