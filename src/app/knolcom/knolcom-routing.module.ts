import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ACCOUNT_SETTINGS, BOOKMARK, DASHBOARD, FAVOURITE, KNOLCOM_HOME, PERSONALIZE } from '../constants/url';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { KnolcomDashboardComponent } from './components/knolcom-dashboard/knolcom-dashboard.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { PersonaliseFeedComponent } from './components/personalise-feed/personalise-feed.component';
import { SavedComponent } from './components/saved/saved.component';

const routes: Routes = [
  {
    path: '',
    component: KnolcomDashboardComponent,
    children: [
      {
        path: '',
        redirectTo: `/${KNOLCOM_HOME}/${DASHBOARD}`,
        pathMatch: 'full'
      },
      {
        path: PERSONALIZE,
        component: PersonaliseFeedComponent
      },
      {
        path: DASHBOARD,
        component: NewsFeedComponent
      },
      {
        path: FAVOURITE,
        component: FavouriteComponent
      },
      {
        path: BOOKMARK,
        component: SavedComponent
      },
      {
        path: ACCOUNT_SETTINGS,
        component: AccountSettingsComponent
      },
      {path: '**', redirectTo: `/${KNOLCOM_HOME}/${DASHBOARD}`, pathMatch: 'full'}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnolcomRoutingModule { }
