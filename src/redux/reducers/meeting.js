import { FETCH_MEETING, GET_MEETING_DETAILS } from "../actionType";

const initialState = {
  meeting_slot: [
    {
      time: "5:00 PM",
      venue: "91SpringBoard",
      floor: "floor 1",
      price: "32000",
      capacity: "20"
    },
    {
      time: "6:00 PM",
      venue: "Work Studio",
      floor: "floor 2",
      price: "30000",
      capacity: "25"
    },
    {
      time: "12:00 PM",
      venue: "Bhive",
      floor: "floor 1",
      price: "48000",
      capacity: "20"
    },
    {
      time: "4:00 PM",
      venue: "Be work",
      floor: "floor 4",
      price: "18000",
      capacity: "10"
    }
  ],
  booked_slot: [],
  current_block: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_MEETING:
      return state;
    case GET_MEETING_DETAILS: {
      let desiredMeeting = {};
      let meetings = [...state.meeting_slot];
      console.log(payload);
      meetings.forEach(meeting => {
        if (meeting.venue == payload) {
          desiredMeeting = meeting;
        }
      });
      console.log(desiredMeeting);
      return {
        ...state,
        current_block: desiredMeeting
      };
    }
    default:
      return state;
  }
};
