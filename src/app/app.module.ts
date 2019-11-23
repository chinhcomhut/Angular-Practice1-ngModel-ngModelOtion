import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './component/hello/hello.component';
import { ViewToComponentComponent } from './component/view-to-component/view-to-component.component';
import { TwoWayBidingComponent } from './component/two-way-biding/two-way-biding.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ViewToComponentComponent,
    TwoWayBidingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
