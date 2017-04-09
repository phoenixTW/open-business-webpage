import { Component, OnInit } from '@angular/core';
import {FooterService} from './footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerConfig: Object;

  constructor(private footerService: FooterService) { }

  ngOnInit() {
    this.footerConfig = this.footerService.get().subscribe(footerConfig => {
      this.footerConfig = footerConfig;
    });
  }

}
