import { IBurgerConstructorActions } from "./burger-constructor";
import { TOrderActions } from './order.types';
import { ILoginActions } from './login.types';
import { TLogoutActions } from './logout.types';
import { IngredientsActionTypes } from './ingredients.types';
import { TFeedActionTypes } from './feed.types';
import { TProfileFeedActionTypes } from './feed-profile.types';

export type AppActions = IBurgerConstructorActions | TOrderActions | ILoginActions | TLogoutActions | IngredientsActionTypes | TOrderActions | TFeedActionTypes | TProfileFeedActionTypes