import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>Schedule Planner</h1>
      <div className="nav-container">
        <Link to="/">All Events</Link>
        <Link to="/add">Add Event</Link>
      </div>
    </header>
  );
};

export default Header;
