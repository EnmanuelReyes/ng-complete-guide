import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShoppingListComponent} from './shopping-list.component';
import {ShoppnigEditComponent} from './shoppnig-edit/shoppnig-edit.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {LoggingService} from '../logging.service';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppnigEditComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild([
    {path: '', component: ShoppingListComponent}
  ]),
  SharedModule
  ],
  // providers: [LoggingService]
})
export class ShoppingListModule {
}
