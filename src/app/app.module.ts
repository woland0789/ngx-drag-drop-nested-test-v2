import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DndModule } from 'ngx-drag-drop';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, DndModule ],
  declarations: [ AppComponent, ItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
