import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './browse/browse.component'; 
import { HomeComponent } from './home/home.component'; 
import { RecomComponent } from './recom/recom.component'; 
import { SearchComponent } from './search/search.component'; 
import { ShazComponent } from './shaz/shaz.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BlackpComponent } from './blackp/blackp.component';
import { JuraComponent } from './jura/jura.component';
import { ThorComponent } from './thor/thor.component';
import { TrainComponent } from './train/train.component';



 const routes: Routes = [
 { path: '', pathMatch: 'full', redirectTo: 'home' },
 { path: 'home', component: HomeComponent},
 { path: 'browse', component: BrowseComponent},
 { path: 'recom', component: RecomComponent},
 { path: 'search', component: SearchComponent},
 { path: 'shaz', component: ShazComponent},
 { path: 'avatar', component: AvatarComponent},
 { path: 'blackp', component: BlackpComponent},
 { path: 'jura', component: JuraComponent},
 { path: 'thor', component: ThorComponent},
 { path: 'train', component: TrainComponent},
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
