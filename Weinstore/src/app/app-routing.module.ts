import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainviewComponent } from './mainview/mainview.component';
import { WinelistComponent } from './winelist/winelist.component';
import { CustomerviewComponent } from './customerview/customerview.component';
const routes: Routes = [ { path: '', component: LoginComponent },
{ path: 'mainview', component: MainviewComponent },
{ path: 'winelist', component: WinelistComponent },
{ path: 'customerlist', component: CustomerviewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
