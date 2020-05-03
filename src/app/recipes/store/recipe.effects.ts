import {Injectable} from '@angular/core';
import {Actions, ofType, Effect} from '@ngrx/effects';
import {catchError, map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {of, throwError} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import * as RecipesActions from './recipe.actions';
import {Recipe} from '../recipe.model';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';


@Injectable()
export class RecipeEffects {


  @Effect()
  fetchRecipes = this.actions$.pipe(
    ofType(RecipesActions.FETCH_RECIPES),
    switchMap(() => {
      return this.http.get<Recipe[]>(
        'https://ng-course-recipe-book-50b65.firebaseio.com/recipes.json'
      ).pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        map(recipes => {
          return new RecipesActions.SetRecipes(recipes);
        })
      );
    })
  );


  @Effect({dispatch: false})
  storeRecipes = this.actions$.pipe(
    ofType(RecipesActions.STORE_RECIPES),
    withLatestFrom(this.store.select('recipes')),
    switchMap(([actionData, recipesState]) => {
      return this.http.put(
        'https://ng-course-recipe-book-50b65.firebaseio.com/recipes.json',
        recipesState.recipes
      );
    })
  );


  constructor(private actions$: Actions, private http: HttpClient, private router: Router,
              private store: Store<fromApp.AppState>) {
  }
}
