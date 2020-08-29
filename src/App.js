import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeContainer } from './components/HomeContainer';
import { WeatherContainer } from './components/WeatherContainer';

function App() {
  return (
    <div className = "App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component = {HomeContainer}></Route>
        {/* <Route path="/weather" component = {WeatherContainer}></Route> */}
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
