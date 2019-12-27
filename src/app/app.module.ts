import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';
import { ContactComponent } from './contact/contact.component';
import { ProgrammaComponent } from './programma/programma.component';
import { DownloadpageComponent } from './downloadpage/downloadpage.component';

const appRoutes: Routes = [
  // { path: 'landing', component: LandingComponent },
  { path: 'site', component: SiteComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'programma', component: ProgrammaComponent },
  { path: 'download', component: DownloadpageComponent },
  { path: '',
    redirectTo: 'site',
    pathMatch: 'full'
  },
  // { path: '**', component: LandingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    ContactComponent,
    ProgrammaComponent,
    DownloadpageComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash: false } // <-- debugging purposes only true
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
