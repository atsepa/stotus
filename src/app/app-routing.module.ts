import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewStatusPageComponent } from './pages/view-status-page/view-status-page.component';


const routes: Routes = [
	{
		path: 'view-status',
		pathMatch: 'full',
		component: ViewStatusPageComponent
	},];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
