import { combineReducers } from 'redux';
import { trackersReducer } from './trackers';
import { Tracker } from '../actions';

export interface StoreState {
  trackers: Tracker[];
}

export const reducers = combineReducers<StoreState>({
  trackers: trackersReducer,
});
