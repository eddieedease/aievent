import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  HttpModule,
  JsonpModule
} from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';
import { ContactComponent } from './contact/contact.component';
import { ProgrammaComponent } from './programma/programma.component';
import { DownloadpageComponent } from './downloadpage/downloadpage.component';
import { InschrijvenComponent } from './inschrijven/inschrijven.component';
import { AdminComponent } from './admin/admin.component';

import {
  CsvModule
} from '@ctrl/ngx-csv';

// ngx bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';


import {
  SerCredService
} from './ser-cred.service';

// DATATABLE COMPONENT
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxLoadingModule  } from 'ngx-loading';

const appRoutes: Routes = [
  // { path: 'landing', component: LandingComponent },
  { path: 'site', component: SiteComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'programma', component: ProgrammaComponent },
  { path: 'inschrijven', component: InschrijvenComponent },
  { path: 'download', component: DownloadpageComponent },
  { path: 'admin', component: AdminComponent },
  { path: '',
    redirectTo: 'site',
    pathMatch: 'full'
  },
  { path: '**', component: SiteComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    ContactComponent,
    ProgrammaComponent,
    DownloadpageComponent,
    InschrijvenComponent,
    AdminComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash: false } // <-- debugging purposes only true
    ),
    FormsModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    JsonpModule,
    CsvModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    NgxDatatableModule,
    NgxLoadingModule
  ],
  providers: [SerCredService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
