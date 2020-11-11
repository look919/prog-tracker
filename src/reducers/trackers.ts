import { Tracker, Action, ActionTypes } from '../actions';

export const trackersReducer = (state: Tracker[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.getTrackers:
      return action.payload;
    case ActionTypes.deleteTracker:
      return state.filter((tracker: Tracker) => tracker.id !== action.payload);
    default:
      return state;
  }
};
