import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KnolcomRoutingModule } from './knolcom-routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { KnolcomDashboardComponent } from './components/knolcom-dashboard/knolcom-dashboard.component';
import { PersonaliseFeedComponent } from './components/personalise-feed/personalise-feed.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { SavedComponent } from './components/saved/saved.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { PrimeNgModule } from '../prime-ng.module';


@NgModule({
  declarations: [LeftBarComponent, KnolcomDashboardComponent, PersonaliseFeedComponent, NewsFeedComponent, SavedComponent, FavouriteComponent, AccountSettingsComponent],
  imports: [
    CommonModule,
    KnolcomRoutingModule,
    MaterialModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class KnolcomModule { }
