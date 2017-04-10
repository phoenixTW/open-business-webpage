import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerConfig: any;
  constructor(private headerService: HeaderService) {}

  ngOnInit() {
    this.headerConfig = this.headerService.get().subscribe(headerConfig => this.headerConfig = headerConfig);
  }

}
