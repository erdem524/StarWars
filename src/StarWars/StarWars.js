import React, { useState, useEffect } from "react";
import NavBar from "./components/Home/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Dimmer, Loader } from "semantic-ui-react";
import Home from "./components/Home/Home";
import People from "./components/People/People";
import Planets from "./components/Planet/Planets";
import Ships from "./components/Ships/Ships";
function Wars() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState([true]);
  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people/?format=json");
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }
    async function fetchPlanets() {
      let res = await fetch("https://swapi.dev/api/planets/?format=json");
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }
    async function fetchShips() {
      let res = await fetch("https://swapi.dev/api/starships/?format=json");
      let data = await res.json();
      setShips(data.results);
      setLoading(false);
    }
    fetchPeople();
    fetchPlanets();
    fetchShips();
  }, []);
  return (
    <div className="starWars">
      <Router>
        <NavBar />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading...</Loader>
            </Dimmer>
          ) : (
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/people">
                <People data={people} />
              </Route>
              <Route exact path="/planets">
                <Planets data={planets} />
              </Route>
              <Route exact path="/ships">
                <Ships data={ships} />
              </Route>
            </Switch>
          )}
        </Container>
      </Router>
    </div>
  );
}
export default Wars;
