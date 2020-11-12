import React from 'react';
//import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const trackers = [
  {
    id: uuidv4(),
    title: 'Test',
    dscription: ['progress1', 'progress2'],
    progress: 3,
  },
  {
    id: uuidv4(),
    title: 'Test2',
    dscription: ['progress1', 'progress2', 'progress3'],
    progress: 3,
  },
];

export const Trackers = () => {
  return (
    <div>
      {trackers.map((tracker) => (
        <div key={tracker.id}>
          <span>{tracker.title}</span>
          <span>{`${tracker.progress * 5}%`}</span>
        </div>
      ))}
    </div>
  );
};
