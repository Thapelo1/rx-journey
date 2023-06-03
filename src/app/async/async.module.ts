import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncRoutingModule } from './async-routing.module';
import { AsyncParentComponent } from './async-parent/async-parent.component';
import { AsyncChildComponent } from './async-child/async-child.component';


@NgModule({
  declarations: [
    AsyncParentComponent,
    AsyncChildComponent
  ],
  imports: [
    CommonModule,
    AsyncRoutingModule
  ],
  exports:[
    AsyncChildComponent,
    AsyncParentComponent
  ]
})
export class AsyncModule { }
