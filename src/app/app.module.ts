import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FilterService, GridAllModule, PagerModule, GroupService, PageService, SortService, ResizeService, EditService, ToolbarService, FreezeService, ColumnMenuService, ReorderService } from '@syncfusion/ej2-angular-grids';
import { MessageModule } from '@syncfusion/ej2-angular-notifications';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridAllModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MessageModule
  ],
  providers: [DatePipe, PageService, SortService, ResizeService,
    FilterService, ReorderService,
    GroupService,
    EditService, ToolbarService, FreezeService, ColumnMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
