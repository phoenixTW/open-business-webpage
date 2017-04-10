import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerConfig: any;
  constructor(private headerService: HeaderService, private titleService: Title) {}

  ngOnInit() {
    this.headerConfig = this.headerService.get()
      .subscribe(headerConfig => {
        this.headerConfig = headerConfig;
        this.titleService.setTitle(this.headerConfig.companyName);
      });
  }

}
