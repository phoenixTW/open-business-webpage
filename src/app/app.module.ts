import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MetaModule } from '@nglibs/meta';
import { MdlModule } from '@angular-mdl/core';
import 'hammerjs';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import {HeaderService} from './header/header.service';
import { FooterComponent } from './footer/footer.component';
import {FooterService} from './footer/footer.service';
import { ContentComponent } from './content/content.component';
import {AppDescriptorService} from './_services/app-descriptor.service';
import { LargeMediaComponent } from './large-media/large-media.component';
import { ColumnComponent } from './column/column.component';
import { FlipCardComponent } from './flip-card/flip-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ContentComponent,
    LargeMediaComponent,
    ColumnComponent,
    FlipCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MdlModule,
    MetaModule.forRoot(),
    BrowserAnimationsModule
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
