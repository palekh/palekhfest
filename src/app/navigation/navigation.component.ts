import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  links = [];

  constructor() { }

  ngOnInit() {
    this.links = [
      {
        name: "программа",
        link: "/program"
      },
      {
        name: "участники",
        link: "/participants",
      },
      {
        name: "путеводитель",
        link: "/guide"
      },
      {
        name: "контакты",
        link: "/contacts"
      }
    ];
  }

}
