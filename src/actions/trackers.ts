import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Tracker {
  id: number;
  title: string;
  description: [string];
  progress: number;
}
export interface GetTrackersAction {
  type: ActionTypes.getTrackers;
  payload: Tracker[];
}
export interface DeleteTrackerAction {
  type: ActionTypes.deleteTracker;
  payload: number;
}

export const getTrackers = () => {
  return async (dispatch: Dispatch) => {
    const res: Tracker[] = JSON.parse(localStorage.getItem('trackers') || '');
    if (res) {
      dispatch<GetTrackersAction>({
        type: ActionTypes.getTrackers,
        payload: res,
      });
    }
  };
};
export const deleteTracker = (id: number): DeleteTrackerAction => {
  return {
    type: ActionTypes.deleteTracker,
    payload: id,
  };
};
