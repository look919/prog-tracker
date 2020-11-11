import { combineReducers } from 'redux';
import { trackersReducer } from './trackers';
import { Tracker } from '../actions';

export interface StoreState {
  todos: Tracker[];
}

export const reducers = combineReducers<StoreState>({
  todos: trackersReducer,
});
