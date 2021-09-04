import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChatPageComponent } from 'src/pages/chat-page/chat-page.component';
import { ExplorePageComponent } from 'src/pages/explore-page/explore-page.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ChatPageComponent, ExplorePageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
