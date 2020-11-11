import { GetTrackersAction, DeleteTrackerAction } from './trackers';

export enum ActionTypes {
  getTrackers,
  deleteTracker,
}

export type Action = GetTrackersAction | DeleteTrackerAction;
