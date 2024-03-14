import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerviewComponent } from './customerview/customerview.component';
import { LoginComponent } from './login/login.component';
import { MainviewComponent } from './mainview/mainview.component';
import { PortalComponent } from './portal/portal.component';
import { WinelistComponent } from './winelist/winelist.component';

const routes: Routes = [ { path: '', component: LoginComponent },
{ path: 'mainview', component: MainviewComponent },
{ path: 'winelist', component: WinelistComponent },
{ path: 'customerlist', component: CustomerviewComponent },
{ path: 'portal', component: PortalComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
