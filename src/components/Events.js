import { FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
require("dotenv").config();

const Events = () => {
  var gapi = window.gapi;
  var CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  var API_KEY = process.env.REACT_APP_API_KEY;
  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  var SCOPES = "https://www.googleapis.com/auth/calendar.events";

  const [events, setEvents] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/events")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEvents(data);
      });
  }, []);

  const calendar = (event) => {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      gapi.client.load("calendar", "v3");

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          var data = {
            summary: event.title,
            description: event.description,
            start: {
              dateTime: `${event.startDate}T${event.startTime}:00`,
              timeZone: "America/Los_Angeles",
            },
            end: {
              dateTime: `${event.endDate}T${event.endTime}:00`,
              timeZone: "America/Los_Angeles",
            },
          };
          var request = gapi.client.calendar.events.insert({
            calendarId: "primary",
            resource: data,
          });

          request.execute((data) => {
            window.open(data.htmlLink);
          });
        });
    });
  };
  const deleteEvent = async (id) => {
    await fetch(`http://localhost:8000/events/${id}`, {
      method: "DELETE",
    });
    setEvents(
      events.filter((event) => {
        return event.id !== id;
      })
    );
  };

  return (
    <div>
      {events && (
        <div className="list-container">
          <div className="title">Events</div>
          {events.map((event) => (
            <div key={event.id} className="event-container">
              <div className="event-info">
                <div>Name: {event.title}</div>
                <div>
                  Date:{" "}
                  {event.startDate === event.endDate
                    ? event.startDate
                    : `${event.startDate} - ${event.endDate}`}
                </div>
                <div>Time: {`${event.startTime} - ${event.endTime}`}</div>
                <div>Description: {event.description}</div>
              </div>
              <div className="event-actions">
                <button
                  onClick={() => {
                    calendar(event);
                  }}
                >
                  Add to Google Calendar
                </button>
                <FaTrash
                  className="trash-icon"
                  onClick={() => {
                    deleteEvent(event.id);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
