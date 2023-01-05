import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  val1: any;
  items: any;
  status: any;
  constructor(private router:Router) {}

  ngOnInit() {
    this.items = [
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

  list(): void {
    this.router.navigate([`listing/`])
  }

  dashboard(): void {
    this.router.navigateByUrl('dashboard')
  }
}
