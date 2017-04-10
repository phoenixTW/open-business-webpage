import {Component, Input, OnInit} from '@angular/core';
import {AppDescriptorService} from '../_services/app-descriptor.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input()
  component: string;
  config: any;
  constructor(private appDescriptor: AppDescriptorService) { }

  ngOnInit() {
    this.config = this.appDescriptor.load(this.component).subscribe(componentConfig => {
      this.config = this.getContentConfig(componentConfig.templates);
    });
  }

  private getContentConfig(templates: Array<any>) {
    for (let count = 0; count < templates.length; count++) {
      if (templates[count].name === 'content') {
        return templates[count].config;
      }
    }
  }
}
