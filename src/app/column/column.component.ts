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
  @Input()
  templateConfig: any;
  config: any;
  constructor() { }

  ngOnInit() {
    this.config = this.templateConfig.config;
  }
}
