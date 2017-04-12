import {Component, OnInit} from '@angular/core';
import { MetaService } from '@nglibs/meta';
import { AppDescriptorService } from './_services/app-descriptor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly metaService: MetaService, private appDescriptor: AppDescriptorService) {}

  ngOnInit(): void {
    this.appDescriptor.load('app').subscribe(appConfig => {
      const meta = appConfig.meta;
      Object.keys(meta).forEach(key => {
        this.metaService.setTag(key, meta[key]);
      });
    });
  }
}
