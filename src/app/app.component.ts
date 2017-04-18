import {Component, OnInit} from '@angular/core';
import {HeaderService} from './header/header.service';
import {Title} from '@angular/platform-browser';
import {AppDescriptorService} from './_services/app-descriptor.service';
import {MetaService} from '@nglibs/meta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  headerConfig: any;
  constructor(private headerService: HeaderService,
              private titleService: Title,
              private appDescriptor: AppDescriptorService,
              private meta: MetaService
  ) {}

  ngOnInit() {
    this.headerConfig = this.headerService.get()
      .subscribe(headerConfig => {
        this.headerConfig = headerConfig;
        this.titleService.setTitle(this.headerConfig.companyName);
      });
    this.appDescriptor.load('app').subscribe(appConfig => {
      Object.keys(appConfig.meta).forEach(metaKey => {
        this.meta.setTag(metaKey, appConfig.meta[metaKey]);
      })
    });
  }
}
