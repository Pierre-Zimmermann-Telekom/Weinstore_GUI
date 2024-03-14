import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerviewComponent } from './customerview/customerview.component';
import { DataserviceService } from './dataservice.service';
import { LoginComponent } from './login/login.component';
import { MainviewComponent } from './mainview/mainview.component';
import { NewWineDialogComponent } from './new-wine-dialog/new-wine-dialog.component';
import { NewcustomerdialogComponent } from './newcustomerdialog/newcustomerdialog.component';
import { PortalComponent } from './portal/portal.component';
import { WinelistComponent } from './winelist/winelist.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainviewComponent,
    WinelistComponent,
    NewWineDialogComponent,
    CustomerviewComponent,
    NewcustomerdialogComponent,
    PortalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,

    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: [
    DataserviceService,
    {
      provide: APP_INITIALIZER,
      useFactory: (dataService: DataserviceService) => dataService.initialize(),
      deps: [DataserviceService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
