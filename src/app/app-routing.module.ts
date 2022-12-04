import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./view/home/home.module').then(m => m.HomeModule) },
  { path: 'episodes', loadChildren: () => import('./view/episodes/episodes.module').then(m => m.EpisodesModule) },
  { path: 'characters', loadChildren: () => import('./view/characters/characters.module').then(m => m.CharactersModule) },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
