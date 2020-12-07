import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Trackers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1.5rem 3.5rem;
  margin-top: 4rem;
`;
export const Tracker = styled(Link)`
  width: 100%;
  min-height: 5rem;
  display: flex;
  align-items: center;
  border-radius: 3px;
  padding: 0.8rem 0.6rem;
  padding-right: 0.4rem;
  background-color: paleturquoise;

  &:link,
  &:visited {
    color: initial;
    text-decoration: none;
  }

  &:not(:last-child) {
    margin-bottom: 1.25rem;
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
    fill: royalblue;
    margin-right: 1rem;
  }
`;
export const TrackerTitle = styled.span`
  font-size: 1.6rem;
  margin-right: auto;
`;
export const TrackerProgress = styled.span`
  font-size: 2.2rem;
  justify-self: flex-end;
  margin-left: 0.5rem;
`;
