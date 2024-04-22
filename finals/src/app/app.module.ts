import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import { RecomComponent } from './recom/recom.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { ShazComponent } from './shaz/shaz.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BlackpComponent } from './blackp/blackp.component';
import { ThorComponent } from './thor/thor.component';
import { TrainComponent } from './train/train.component';
import { JuraComponent } from './jura/jura.component';

//add



@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    RecomComponent,
    SearchComponent,
    HomeComponent,
    ShazComponent,
    AvatarComponent,
    BlackpComponent,
    ThorComponent,
    TrainComponent,
    JuraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
