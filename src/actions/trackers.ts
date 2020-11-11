import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Tracker {
  id: number;
  title: string;
  dscription: [string]
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

export const getTrackers= () => {
  return async (dispatch: Dispatch) => {
    const res = localStorage.getItem('trackers')|| undefined;
    if(res){
        const trackers: Tracker[] = JSON.parse(res);

        dispatch<GetTrackersAction>({
          type: ActionTypes.getTrackers,
          payload: trackers,
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