import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerDetailComponent } from './trainer/trainer-detail/trainer-detail.component';
import { TrainerListComponent } from './trainer/trainer-list/trainer-list.component';

const routes: Routes = [
  { path: 'trainers', component: TrainerListComponent },
  { path: 'trainers/:id', component: TrainerDetailComponent }, 
  { path: '', redirectTo: '/trainers', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
