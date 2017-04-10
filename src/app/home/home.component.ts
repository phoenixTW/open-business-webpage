import { Component, OnInit } from '@angular/core';
import {AppDescriptorService} from '../_services/app-descriptor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public componentName = 'Home';
  private homeConfig: any;
  constructor(private appDescriptor: AppDescriptorService) { }

  ngOnInit() {
    this.homeConfig = this.appDescriptor.load(this.componentName).subscribe(config => {
      this.homeConfig = config;
    });
  }
  isTemplate(template, name) {
    return template.name === name;
  }
}
