import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {HeaderService} from './header/header.service';
import { FooterComponent } from './footer/footer.component';
import {FooterService} from './footer/footer.service';
import { ContentComponent } from './content/content.component';
import {AppDescriptorService} from './_services/app-descriptor.service';
import { LargeMediaComponent } from './large-media/large-media.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ContentComponent,
    LargeMediaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot()
  ],
  providers: [
    HeaderService,
    FooterService,
    AppDescriptorService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
