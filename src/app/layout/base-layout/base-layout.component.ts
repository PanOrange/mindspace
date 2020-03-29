import { Component, OnInit } from '@angular/core';
import { Url } from "../../shared/enums/url.enum";

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.sass']
})
export class BaseLayoutComponent implements OnInit {
  public menu = [
    { name: 'dashboard', link: Url.DASHBOARD, icon: '' },
  ];

  public defaultIcon: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
