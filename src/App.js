import Header from "./components/Header";
import Events from "./components/Events";
import AddEvent from "./components/AddEvent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/">
            <Events />
          </Route>
          <Route path="/add">
            <AddEvent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
