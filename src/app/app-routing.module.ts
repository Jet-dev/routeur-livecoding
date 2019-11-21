import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TotoComponent } from './toto/toto.component';
import { TataComponent } from './tata/tata.component';
import { TitiComponent } from './tata/titi/titi.component';
import { TutuComponent } from './tata/tutu/tutu.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'toto', component: TotoComponent },
  {
    path: 'tata', component: TataComponent, children: [
      { path: 'titi', component: TitiComponent },
      { path: 'tutu', component: TutuComponent }
    ]
  },
  { path: 'tata/:id', component: TataComponent },
  { path: '**', component: NotFoundComponent, data: { 'message': '404 allez vous en' } }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
