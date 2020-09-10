import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OurMottoComponent } from './our-motto/our-motto.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OurMottoComponent,
    HomeComponent,
    ExploreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
