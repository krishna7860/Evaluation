import React, { useEffect } from "react";
import DashNav from "./DashNav";
import { connect } from "react-redux";
import { fetchMeeting } from "../../redux/actions/meeting";
import { logout } from "../../redux/actions/auth";
import MeetingList from "../../component/common/MeetingList/MeetingList";
import { Route, Switch } from "react-router-dom";
import BookingDetails from "../../component/common/Booking/BookingDetails";
import NotFound from "../NotFound";

const Dashboard = ({ token, meeting, fetchMeeting, logout }) => {
  useEffect(() => {
    fetchMeeting();
  }, [meeting]);

  const logoutUser = () => {
    logout();
  };
  return (
    <div>
      <DashNav token={token} logout={logoutUser}></DashNav>
      <Switch>
        <Route
          path="/dash"
          render={() => <MeetingList meeting={meeting} />}
        ></Route>
        <Route path="/booking/:id" component={BookingDetails}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  meeting: state.meeting.meeting_slot
});

export default connect(mapStateToProps, { fetchMeeting, logout })(Dashboard);
