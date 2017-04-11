import {Component, Input, OnInit} from '@angular/core';
import {AppDescriptorService} from "../_services/app-descriptor.service";

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Input()
  component: string;
  config: any;
  constructor(private appDescriptor: AppDescriptorService) { }

  ngOnInit() {
    this.config = this.appDescriptor.load(this.component).subscribe(componentConfig => {
      this.config = this.getLargeMediaConfig(componentConfig.templates);
    });
  }

  private getLargeMediaConfig(templates: Array<any>) {
    for (let count = 0; count < templates.length; count++) {
      if (templates[count].name === 'column') {
        return templates[count].config;
      }
    }
  }
}
