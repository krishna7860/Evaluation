import { FETCH_MEETING, GET_MEETING_DETAILS } from "../actionType";

export const fetchMeeting = () => ({
  type: FETCH_MEETING
});

export const getMeetingDetails = venue => ({
  type: GET_MEETING_DETAILS,
  payload: venue
});
