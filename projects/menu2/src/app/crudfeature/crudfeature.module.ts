import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudfeatureRoutingModule } from './crudfeature-routing.module';
import { CrudfeatureComponent } from './crudfeature.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CrudfeatureComponent
  ],
  imports: [
    CommonModule,
    CrudfeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CrudfeatureModule { }
