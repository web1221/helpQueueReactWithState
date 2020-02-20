import React from 'react';
import TicketList from "./components/TicketList";
import Header from "./components/Header";
import NewTicketControl from "./components/NewTicketControl";
import Error404 from './components/Error404';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import { v4 } from 'uuid'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: {},
      selectedTicket: null
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }

  handleChangingSelectedTicket(ticketId){
    this.setState({selectedTicket: ticketId});
  }

  handleAddingNewTicketToList(newTicket){
    var newTicketId = v4();
    var newMasterTicketList = Object.assign({}, this.state.masterTicketList, {
      [newTicketId]: newTicket
    });
    newMasterTicketList[newTicketId].formattedWaitTime = newMasterTicketList[newTicketId].timeOpen.fromNow(true);
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
  var newMasterTicketList = Object.assign({}, this.state.masterTicketList);
  Object.keys(newMasterTicketList).forEach(ticketId => {
    newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
  });
  this.setState({masterTicketList: newMasterTicketList});
}
render() {
  return (
    <div>
    <Header/>
    <Switch>
    <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
    <Route path='/newticket'  render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
    <Route path='/admin' render={(props)=><Admin ticketList={this.state.masterTicketList} currentRouterPath={props.location.pathname} onTicketSelection={this.handleChangingSelectedTicket} selectedTicket={this.state.selectedTicket}/>} />
    <Route component={Error404} />
    </Switch>
    </div>
  );
}

}

export default App;
