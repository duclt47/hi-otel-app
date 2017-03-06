import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { WellcomeComponent } from './component/wellcome/wellcome.component';
// import { viewUserComponent } from './component/viewUserList/viewUserList.component';
import { appRoutes } from './app.routes';
import { ApiService } from './services/Api.service';



@NgModule({
  declarations: [
    AppComponent,
   WellcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    HttpModule,
    appRoutes
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
