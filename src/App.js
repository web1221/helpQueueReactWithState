import React from 'react';
import TicketList from "./components/TicketList";
import Header from "./components/Header";
import NewTicketForm from "./components/NewTicketForm";
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
    <Header/>
    <Switch>
    <Route exact path='/' component={TicketList} />
    <Route path='/newticket' component={NewTicketForm} />
    </Switch>
    </div>
  );
}


export default App;
