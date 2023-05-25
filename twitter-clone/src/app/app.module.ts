import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TrendsComponent } from './trends/trends.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrendsComponent,
    SidebarComponent,
    BookmarksComponent,
    HomeHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
