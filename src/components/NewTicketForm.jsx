import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid'

function NewTicketForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;


  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    const { dispatch } = props
    const action = {
      type: 'ADD_TICKET',
      id: v4(),
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      timeOpen: new Date().getTime()
    }
    dispatch(action)
    _names.value = '';
    _location.value ='';
    _issue.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

NewTicketForm.propTypes = {

};

NewTicketForm = connect()(NewTicketForm);

export default NewTicketForm;
