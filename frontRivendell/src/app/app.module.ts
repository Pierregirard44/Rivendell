import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { EventsComponent } from './pages/events/events.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventCardComponent } from './components/event-card/event-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    EventsComponent,
    ProfileComponent,
    FooterComponent,
    EventCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
