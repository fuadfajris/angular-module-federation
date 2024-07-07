import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChartFeatureComponent } from './chart-feature/chart-feature.component';
import { ChartFeatureModule } from './chart-feature/chart-feature.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartFeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartFeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
