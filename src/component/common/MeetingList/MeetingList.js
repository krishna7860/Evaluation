import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function MeetingList({ meeting }) {
  const [table, setTable] = useState({
    meetingList: meeting,
    filteredMeeting: [],
    isFiltered: false,
    byname: ""
  });
  let { meetingList, filteredMeeting, isFiltered, byname } = table;

  const handleChange = e => {
    setTable({ ...table, [e.target.name]: e.target.value });
    if (e.target.value == "") {
      setTable({
        ...table,
        [e.target.name]: e.target.value,
        isFiltered: false,
        filteredMeeting: []
      });
    }
  };

  const searchVenue = () => {
    let filtered = [...filteredMeeting];
    meetingList.forEach(meeting => {
      if (meeting.venue.startsWith(byname)) {
        filtered.push(meeting);
      }
    });
    setTable({ ...table, filteredMeeting: filtered, isFiltered: true });
  };

  let meetingToRender = [];
  if (isFiltered) {
    meetingToRender = filteredMeeting;
  } else {
    meetingToRender = meetingList;
  }
  return (
    <div className="p-5">
      <div className="form-group col-3">
        <label>Search by name</label>
        <input
          type="text"
          className="form-control"
          name="byname"
          value={byname}
          onChange={handleChange}
        ></input>
        <button onClick={searchVenue} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr className="row">
            <th className="col">Time</th>
            <th className="col">Venue</th>
            <th className="col">Floor</th>
            <th className="col">Price</th>
            <th className="col">Capacity</th>
            <th className="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {meetingToRender.map((item, index) => (
            <tr className="row" key={index}>
              <td className="col">{item.time}</td>
              <td className="col">{item.venue}</td>
              <td className="col">{item.floor}</td>
              <td className="col">{item.price}</td>
              <td className="col">{item.capacity}</td>
              <td className="col">
                {
                  <Link
                    to={`/booking/${item.venue}`}
                    className="btn btn-warning"
                  >
                    Book Venue
                  </Link>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
