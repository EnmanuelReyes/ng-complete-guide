import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {AuthComponent} from './auth.component';
import {RecipesModule} from '../recipes/recipes.module';
import {ShoppingListModule} from '../shopping-list/shopping-list.module';
import {SharedModule} from '../shared/shared.module';
import {CoreModule} from '../core.module';
import {RouterModule} from '@angular/router';
import {ShoppingListComponent} from '../shopping-list/shopping-list.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: AuthComponent}
    ]),
    SharedModule
  ]
})
export class AuthModule {
}
