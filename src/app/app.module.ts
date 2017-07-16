import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SharedModule, SHARED_SERVICES } from './shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, HttpModule, SharedModule, AppRoutingModule],
  providers: [...SHARED_SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule {}
