import React from 'react';
import TicketList from "./components/TicketList";
import Header from "./components/Header";
import NewTicketControl from "./components/NewTicketControl";
import Error404 from './components/Error404';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }
  handleAddingNewTicketToList(newTicket){
    var newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  render() {
    return (
      <div>
      <Header/>
      <Switch>
      <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
      <Route path='/newticket'  render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
      <Route component={Error404} />
      </Switch>
      </div>
    );
  }

}

  export default App;
