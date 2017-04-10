import {Component, Input, OnInit} from '@angular/core';
import {AppDescriptorService} from '../_services/app-descriptor.service';

@Component({
  selector: 'app-large-media',
  templateUrl: './large-media.component.html',
  styleUrls: ['./large-media.component.scss']
})
export class LargeMediaComponent implements OnInit {
  @Input()
  component: string;
  config: any;
  constructor(private appDescriptor: AppDescriptorService) { }

  ngOnInit() {
    this.config = this.appDescriptor.load(this.component).subscribe(componentConfig => {
      this.config = this.getLargeMediaConfig(componentConfig.templates);
      console.log(this.config);
    });
  }

  private getLargeMediaConfig(templates: Array<any>) {
    for (let count = 0; count < templates.length; count++) {
      if (templates[count].name === 'large.media') {
        return templates[count].config;
      }
    }
  }
}
