import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMeetingDetails } from "../../../redux/actions/meeting";
import style from "./BookingDetails.module.css";
const BookingDetails = ({ match, currentMeeting, getMeetingDetails }) => {
  useEffect(() => {
    getMeetingDetails(match.params.id);
  }, []);
  return (
    <div className="p-5">
      <h2>Booking Details</h2>
      <p className="lead">
        Venue : <span className={style.items}>{currentMeeting.venue}</span>
      </p>
      <p className="lead">
        Meeting Time :{" "}
        <span className={style.items}>{currentMeeting.time}</span>
      </p>
      <p className="lead">
        Floor : <span className={style.items}>{currentMeeting.floor}</span>
      </p>
      <p className="lead">
        Price : <span className={style.items}>{currentMeeting.price}</span>
      </p>
      <p className="lead">
        Capacity :{" "}
        <span className={style.items}>{currentMeeting.capacity}</span>
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  currentMeeting: state.meeting.current_block
});

export default connect(mapStateToProps, { getMeetingDetails })(BookingDetails);
