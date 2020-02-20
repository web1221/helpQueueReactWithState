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
    newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true)
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
    this.updateTicketElapsedWaitTime(),
    60000
  );
}

componentWillUnmount(){
  clearInterval(this.waitTimeUpdateTimer);
}

componentWillMount() {
  console.log('componentWillMount');
}

componentWillReceiveProps() {
  console.log('componentWillReceiveProps');
}

shouldComponentUpdate() {
  console.log('shouldComponentUpdate');
  return true;
}

componentWillUpdate() {
  console.log('componentWillUpdate');
}

componentDidUpdate() {
  console.log('componentDidUpdate');
}

updateTicketElapsedWaitTime() {
  console.log("check");
  let newMasterTicketList = this.state.masterTicketList.slice();
  newMasterTicketList.forEach((ticket) =>
  ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
);
this.setState({masterTicketList: newMasterTicketList})
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
