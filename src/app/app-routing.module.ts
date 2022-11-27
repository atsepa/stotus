import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusPageComponent } from './pages/status-page/status-page.component';


const routes: Routes = [
  {
    path: 'status',
    pathMatch: 'full',
    component: StatusPageComponent
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
