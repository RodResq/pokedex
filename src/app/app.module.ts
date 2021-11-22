import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './views/list/list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListItemComponent } from './components/list-item/list-item.component';
import { RollOnScrollDirective } from './directives/roll-on-scroll.directive';
import { MyNumberPipe } from './pipes/my-namber.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    RollOnScrollDirective,
    MyNumberPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
