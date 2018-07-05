import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ExelUtilsComponent } from './exel-utils/exel-utils.component';
import { AppServiceModule } from './providers/app-services-module';

@NgModule({
  declarations: [
    AppComponent,
    ExelUtilsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppServiceModule
  ],
  providers: [AppServiceModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
