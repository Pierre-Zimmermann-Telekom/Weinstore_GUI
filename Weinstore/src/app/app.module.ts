import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DataserviceService } from './dataservice.service';
import { APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainviewComponent } from './mainview/mainview.component';
import { WinelistComponent } from './winelist/winelist.component';
import { NewWineDialogComponent } from './new-wine-dialog/new-wine-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerviewComponent } from './customerview/customerview.component';
import { NewcustomerdialogComponent } from './newcustomerdialog/newcustomerdialog.component';
import { PortalComponent } from './portal/portal.component';

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
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [
    DataserviceService,
    {
      provide: APP_INITIALIZER,
      useFactory: (dataService: DataserviceService) => dataService.initialize(),
      deps: [DataserviceService],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
