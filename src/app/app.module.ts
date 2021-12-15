import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutOneComponent } from './layout/layout-one/layout-one.component';
import { LayoutTwoComponent } from './layout/layout-two/layout-two.component';
import { LayoutThreeComponent } from './layout/layout-three/layout-three.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LayoutOneComponent,
    LayoutTwoComponent,
    LayoutThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
